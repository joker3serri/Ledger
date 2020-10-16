// @flow

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import { getAccountCapabilities } from "@ledgerhq/live-common/lib/compound/logic";

import type { Account, TokenAccount } from "@ledgerhq/live-common/lib/types";
import type { CompoundAccountSummary } from "@ledgerhq/live-common/lib/compound/types";

import { localeSelector } from "~/renderer/reducers/settings";

import { getAccountCurrency, getAccountUnit } from "@ledgerhq/live-common/lib/account";
import { formatCurrencyUnit } from "@ledgerhq/live-common/lib/currencies";

import { openModal } from "~/renderer/actions/modals";
import Box from "~/renderer/components/Box";
import Modal, { ModalBody } from "~/renderer/components/Modal";
import ArrowRight from "~/renderer/icons/ArrowRight";
import Minus from "~/renderer/icons/Minus";
import Text from "~/renderer/components/Text";
import InfoBox from "~/renderer/components/InfoBox";

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${p => p.theme.colors.palette.action.hover};
  color: ${p => p.theme.colors.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${p => p.theme.space[2]}px;
`;

const ManageButton = styled.button`
  min-height: 88px;
  padding: 16px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.palette.divider};
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    border: 1px solid ${p => p.theme.colors.palette.primary.main};
  }

  ${p =>
    p.disabled
      ? css`
          pointer-events: none;
          cursor: auto;
          ${IconWrapper} {
            background-color: ${p.theme.colors.palette.action.active};
            color: ${p.theme.colors.palette.text.shade20};
          }
          ${Title} {
            color: ${p.theme.colors.palette.text.shade50};
          }
          ${Description} {
            color: ${p.theme.colors.palette.text.shade30};
          }
        `
      : `
      cursor: pointer;
  `};
`;

const InfoWrapper = styled(Box).attrs(() => ({
  vertical: true,
  flex: 1,
  ml: 3,
  textAlign: "start",
}))``;

const Title = styled(Text).attrs(() => ({
  ff: "Inter|SemiBold",
  fontSize: 4,
}))``;

const Description = styled(Text).attrs(({ isPill }) => ({
  ff: isPill ? "Inter|SemiBold" : "Inter|Regular",
  fontSize: isPill ? 2 : 3,
  color: "palette.text.shade60",
}))`
  ${p =>
    p.isPill
      ? `
    text-transform: uppercase;
  `
      : ""}
`;

type Props = {
  name?: string,
  account: TokenAccount,
  parentAccount: ?Account,
  ...
} & CompoundAccountSummary;

const ManageModal = ({ name, account, parentAccount, ...rest }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currency = getAccountCurrency(account);

  const onSelectAction = useCallback(
    (name: string, onClose: () => void, nextStep?: string, cta?: string) => {
      onClose();
      dispatch(
        openModal(name, {
          parentAccount,
          accountId: parentAccount?.id && account.parentId,
          account,
          currency,
          nextStep,
          cta,
        }),
      );
    },
    [dispatch, account, parentAccount, currency],
  );

  const locale = useSelector(localeSelector);
  const unit = getAccountUnit(account);

  const capabilities = getAccountCapabilities(account);
  if (!capabilities) return null;
  const {
    canSupply,
    canSupplyMax,
    canWithdraw,
    enabledAmount,
    enabledAmountIsUnlimited,
  } = capabilities;

  console.log(capabilities);

  const formattedEnabledAmount = enabledAmountIsUnlimited
    ? t("lend.enable.steps.amount.noLimit", { assetName: currency.name })
    : enabledAmount &&
      formatCurrencyUnit(unit, enabledAmount, {
        locale,
        showAllDigits: false,
        disableRounding: true,
        showCode: true,
      });

  return (
    <Modal
      {...rest}
      name={name}
      centered
      render={({ onClose, data }) => (
        <ModalBody
          onClose={onClose}
          onBack={undefined}
          title={<Trans i18nKey="lend.manage.title" />}
          noScroll
          render={() => (
            <>
              <Box>
                {!canSupplyMax && (
                  <Box mb={2}>
                    <InfoBox
                      onLearnMore={() =>
                        onSelectAction(
                          "MODAL_LEND_ENABLE_FLOW",
                          onClose,
                          undefined,
                          t("lend.enable.steps.selectAccount.cta"),
                        )
                      }
                      learnMoreLabel={<Trans i18nKey="lend.manage.enable.reenableLabel" />}
                    >
                      <Trans
                        i18nKey="lend.manage.enable.info"
                        values={{ amount: formattedEnabledAmount }}
                      >
                        <b></b>
                      </Trans>
                    </InfoBox>
                  </Box>
                )}

                <ManageButton
                  disabled={!canSupply}
                  onClick={() => onSelectAction("MODAL_LEND_SUPPLY", onClose)}
                >
                  <IconWrapper>
                    <ArrowRight size={16} />
                  </IconWrapper>
                  <InfoWrapper>
                    <Title>
                      <Trans i18nKey="lend.manage.supply.title" />
                    </Title>
                    <Description>
                      <Trans i18nKey="lend.manage.supply.description" />
                    </Description>
                  </InfoWrapper>
                </ManageButton>
                <ManageButton
                  disabled={!canWithdraw}
                  onClick={() => onSelectAction("MODAL_LEND_WITHDRAW_FLOW", onClose)}
                >
                  <IconWrapper>
                    <Minus size={16} />
                  </IconWrapper>
                  <InfoWrapper>
                    <Title>
                      <Trans i18nKey="lend.manage.withdraw.title" />
                    </Title>
                    <Description>
                      <Trans i18nKey="lend.manage.withdraw.description" />
                    </Description>
                  </InfoWrapper>
                </ManageButton>
              </Box>
            </>
          )}
          renderFooter={undefined}
        />
      )}
    />
  );
};

export default ManageModal;
