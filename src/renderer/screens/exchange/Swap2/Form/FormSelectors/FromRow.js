// @flow
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getAccountUnit } from "@ledgerhq/live-common/lib/account";
import Box from "~/renderer/components/Box";
import { fromSelector } from "~/renderer/actions/swap";
import InputCurrency from "~/renderer/components/InputCurrency";
import { ErrorContainer } from "~/renderer/components/Input";
import { SelectAccount } from "~/renderer/components/SelectAccount";
import Switch from "~/renderer/components/Switch";
import Text from "~/renderer/components/Text";
import { shallowAccountsSelector } from "~/renderer/reducers/accounts";
import { amountInputContainerProps, renderAccountValue, selectRowStylesMap } from "./utils";
import { FormLabel } from "./FormLabel";
import type {
  SwapSelectorStateType,
  SwapTransactionType,
} from "~/renderer/screens/exchange/Swap2/utils/shared/useSwapTransaction";
import { usePickDefaultAccount } from "../../utils/shared/hooks";

type Props = {
  fromAccount: $PropertyType<SwapSelectorStateType, "account">,
  setFromAccount: $PropertyType<SwapTransactionType, "setFromAccount">,
  toggleMax: $PropertyType<SwapTransactionType, "toggleMax">,
  fromAmount: $PropertyType<SwapSelectorStateType, "amount">,
  setFromAmount: $PropertyType<SwapTransactionType, "setFromAmount">,
  isMaxEnabled: boolean,
  fromAmountError?: Error,
};

/* @dev: Yeah, Im sorry if you read this, design asked us to
 override the input component when it is called from the swap form. */
const InputSection = styled(Box)`
  & ${ErrorContainer} {
    font-weight: 500;
    font-size: 11px;
    text-align: right;
    margin-left: calc(calc(100% + 45px) * -1);
    width: calc(calc(100% + 30px) * 2);
    margin-top: 6px;
  }
`;

function FromRow({
  fromAmount,
  setFromAmount,
  fromAccount,
  setFromAccount,
  isMaxEnabled,
  toggleMax,
  fromAmountError,
}: Props) {
  const accounts = useSelector(fromSelector)(useSelector(shallowAccountsSelector));
  const unit = fromAccount && getAccountUnit(fromAccount);
  const { t } = useTranslation();
  usePickDefaultAccount(accounts, fromAccount, setFromAccount);

  return (
    <>
      <Box
        horizontal
        justifyContent="space-between"
        alignItems="flex-end"
        fontSize={3}
        mb={1}
        color={"palette.text.shade40"}
      >
        <FormLabel>{t("swap2.form.from.title")}</FormLabel>
        <Box horizontal alignItems="center">
          <Text ff="Inter|Medium" marginRight={1} fontSize={2}>
            {t("swap2.form.from.max")}
          </Text>
          <Switch small isChecked={isMaxEnabled} onChange={toggleMax} disabled={!fromAccount} />
        </Box>
      </Box>
      <Box horizontal boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05);">
        <Box width="50%">
          <SelectAccount
            accounts={accounts}
            value={fromAccount}
            // $FlowFixMe
            onChange={setFromAccount}
            stylesMap={selectRowStylesMap}
            placeholder={t("swap2.form.from.accountPlaceholder")}
            showAddAccount
            isSearchable={false}
            disabledTooltipText={t("swap2.form.from.currencyDisabledTooltip")}
            renderValue={renderAccountValue}
          />
        </Box>
        <InputSection width="50%">
          <InputCurrency
            value={fromAmount}
            onChange={setFromAmount}
            disabled={!fromAccount || isMaxEnabled}
            placeholder="0"
            textAlign="right"
            fontWeight={600}
            containerProps={amountInputContainerProps}
            // $FlowFixMe
            unit={unit}
            // Flow complains if this prop is missing…
            renderRight={null}
            error={fromAmountError}
          />
        </InputSection>
      </Box>
    </>
  );
}

export default FromRow;
