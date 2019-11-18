// @flow

import React, { useEffect, useState, useCallback } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Trans, translate } from 'react-i18next'
import { createStructuredSelector } from 'reselect'
import type { Account, AccountLike, Operation } from '@ledgerhq/live-common/lib/types'
import { getMainAccount, addPendingOperation } from '@ledgerhq/live-common/lib/account'
import useBridgeTransaction from '@ledgerhq/live-common/lib/bridge/useBridgeTransaction'
import Track from 'analytics/Track'
import { updateAccountWithUpdater } from 'actions/accounts'
import { MODAL_SEND } from 'config/constants'
import logger from 'logger'
import type { T, Device } from 'types/common'

import { useSignTransactionCallback } from 'helpers/useSignTransaction'
import { getCurrentDevice } from 'reducers/devices'
import { accountsSelector } from 'reducers/accounts'
import { closeModal, openModal } from 'reducers/modals'
import { UserRefusedOnDevice } from '@ledgerhq/errors'

import Stepper from 'components/base/Stepper'
import SyncSkipUnderPriority from 'components/SyncSkipUnderPriority'

import StepRecipient, { StepRecipientFooter } from './steps/StepRecipient'
import StepConnectDevice, { StepConnectDeviceFooter } from './steps/StepConnectDevice'
import StepVerification from './steps/StepVerification'
import StepSummary, { StepSummaryFooter } from './steps/StepSummary'
import StepConfirmation, { StepConfirmationFooter } from './steps/StepConfirmation'

type OwnProps = {|
  stepId: string,
  onClose: () => void,
  onChangeStepId: string => void,
  params: {
    account: ?AccountLike,
    parentAccount: ?Account,
  },
|}

type StateProps = {|
  t: T,
  device: ?Device,
  accounts: Account[],
  closeModal: string => void,
  openModal: (string, any) => void,
  updateAccountWithUpdater: (string, (Account) => Account) => void,
|}

type Props = {|
  ...OwnProps,
  ...StateProps,
|}

const createSteps = () => [
  {
    id: 'account',
    label: <Trans i18nKey="delegationflow.steps.account.title" />,
    component: StepRecipient,
    footer: StepRecipientFooter,
  },
  {
    id: 'starter',
    label: <Trans i18nKey="delegationflow.steps.starter.title" />,
    component: ({ transitionTo }) => (
      <button onClick={() => transitionTo('account')}>starter</button>
    ),
    excludeFromBreadcrumb: true,
  },
  {
    id: 'summary',
    label: <Trans i18nKey="delegationflow.steps.summary.title" />,
    component: StepSummary,
    footer: StepSummaryFooter,
    onBack: ({ transitionTo }) => transitionTo('account'),
  },
  {
    id: 'validator',
    excludeFromBreadcrumb: true,
    component: ({ transitionTo }) => (
      <button onClick={() => transitionTo('summary')}>validator</button>
    ),
    shouldPreventClose: true,
  },
  {
    id: 'device',
    label: <Trans i18nKey="delegationflow.steps.device.title" />,
    component: StepConnectDevice,
    footer: StepConnectDeviceFooter,
    onBack: ({ transitionTo }) => transitionTo('summary'),
  },
  {
    id: 'verification',
    excludeFromBreadcrumb: true,
    component: StepVerification,
    shouldPreventClose: true,
  },
  {
    id: 'refused',
    excludeFromBreadcrumb: true,
    component: StepConfirmation,
    footer: StepConfirmationFooter,
    onBack: ({ transitionTo, onRetry }) => {
      onRetry()
      transitionTo('summary')
    },
  },
  {
    id: 'confirmation',
    label: <Trans i18nKey="delegationflow.steps.confirmation.title" />,
    excludeFromBreadcrumb: true,
    component: StepConfirmation,
    footer: StepConfirmationFooter,
    onBack: ({ transitionTo, onRetry }) => {
      onRetry()
      transitionTo('recipient')
    },
  },
]

const mapStateToProps = createStructuredSelector({
  device: getCurrentDevice,
  accounts: accountsSelector, // TODO only tezos accounts not yet delegated
})

const mapDispatchToProps = {
  closeModal,
  openModal,
  updateAccountWithUpdater,
}

const Body = ({
  t,
  device,
  openModal,
  closeModal,
  onChangeStepId,
  onClose,
  stepId,
  params,
  accounts,
  updateAccountWithUpdater,
}: Props) => {
  const openedFromAccount = !!params.account
  const [steps] = useState(createSteps)
  const {
    transaction,
    setTransaction,
    account,
    parentAccount,
    setAccount,
    status,
    bridgeError,
    bridgePending,
  } = useBridgeTransaction()

  const [isAppOpened, setAppOpened] = useState(false)
  const [optimisticOperation, setOptimisticOperation] = useState(null)
  const [transactionError, setTransactionError] = useState(null)
  const [signed, setSigned] = useState(false)

  const handleCloseModal = useCallback(() => closeModal(MODAL_SEND), [closeModal])

  const handleChangeAccount = useCallback(
    (nextAccount: AccountLike, nextParentAccount: ?Account) => {
      if (account !== nextAccount) {
        setAccount(nextAccount, nextParentAccount)
      }
    },
    [account, setAccount],
  )

  const handleRetry = useCallback(() => {
    setTransactionError(null)
    setOptimisticOperation(null)
    setAppOpened(false)
    setSigned(false)
  }, [])

  const handleTransactionError = useCallback(
    (error: Error) => {
      if (!(error instanceof UserRefusedOnDevice)) {
        logger.critical(error)
      }
      const stepVerificationIndex = steps.findIndex(step => step.id === 'verification')
      if (stepVerificationIndex === -1) return
      setTransactionError(error)
    },
    [steps],
  )

  const handleOperationBroadcasted = useCallback(
    (optimisticOperation: Operation) => {
      if (!account) return
      const mainAccount = getMainAccount(account, parentAccount)
      updateAccountWithUpdater(mainAccount.id, account =>
        addPendingOperation(account, optimisticOperation),
      )
      setOptimisticOperation(optimisticOperation)
      setTransactionError(null)
    },
    [account, parentAccount, updateAccountWithUpdater],
  )

  const handleSignTransaction = useSignTransactionCallback({
    context: 'Delegate',
    device,
    account,
    parentAccount,
    handleOperationBroadcasted,
    transaction,
    handleTransactionError,
    setSigned,
  })

  const handleStepChange = useCallback(e => onChangeStepId(e.id), [onChangeStepId])

  // only call on mount/unmount
  useEffect(() => {
    const parentAccount = params && params.parentAccount
    const account = (params && params.account) || accounts[0]
    setAccount(account, parentAccount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const errorSteps = []

  if (transactionError) {
    errorSteps.push(2)
  } else if (bridgeError) {
    errorSteps.push(1)
  }

  const error = transactionError || bridgeError

  const stepperProps = {
    title: t('send.title'),
    initialStepId: stepId,
    steps,
    errorSteps,
    device,
    openedFromAccount,
    account,
    parentAccount,
    transaction,
    isAppOpened,
    hideBreadcrumb: stepId === 'starter' || stepId === 'validator',
    error,
    status,
    bridgePending,
    signed,
    optimisticOperation,
    openModal,
    onClose,
    closeModal: handleCloseModal,
    onChangeAccount: handleChangeAccount,
    onChangeAppOpened: setAppOpened,
    onChangeTransaction: setTransaction,
    onRetry: handleRetry,
    signTransaction: handleSignTransaction,
    onStepChange: handleStepChange,
  }

  if (!status) return null

  return (
    <Stepper {...stepperProps}>
      <SyncSkipUnderPriority priority={100} />
      <Track onUnmount event="CloseModalDelegate" />
    </Stepper>
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate(),
)(Body)
