// @flow
import React, { useCallback } from "react";
import styled from "styled-components";
import Box from "~/renderer/components/Box";
import FormattedVal from "~/renderer/components/FormattedVal";
import Variation from "~/renderer/components/Variation";
import type { ThemedComponent } from "~/renderer/styles/StyleProvider";
import type { Account, Currency, TokenAccount } from "@ledgerhq/live-common/lib/types";
import { withRouter } from "react-router";
import { setTrackingSource } from "~/renderer/analytics/TrackPage";
import { useHistory } from "react-router-dom";
import Button from "~/renderer/components/Button";
import CryptoCurrencyIcon from "~/renderer/components/CryptoCurrencyIcon";

const Cell = styled(Box)`
  padding: 15px 20px;
`;

const CryptoCurrencyIconWrapper = styled.div`
  height: 20px;
  width: 20px;
  position: relative;

  img {
    height: 100%;
  }
`;

const CurrencyTicker = styled.div`
  padding: 5px 10px;
  color: ${p => p.theme.colors.palette.text.shade30};
`;

const Row: ThemedComponent<{}> = styled(Box)`
  background: ${p => p.theme.colors.palette.background.paper};
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px 0 #00000007;
  color: #abadb6;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 600;
  justify-content: flex-start;
  margin-bottom: 9px;
  position: relative;
  transition: background-color ease-in-out 200ms;

  :hover {
    border-color: ${p => p.theme.colors.palette.text.shade20};
  }

  :active {
    border-color: ${p => p.theme.colors.palette.text.shade20};
    background: ${p => p.theme.colors.palette.action.hover};
  }
`;

const RowContent: ThemedComponent<{
  disabled?: boolean,
  isSubAccountsExpanded: boolean,
}> = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  opacity: ${p => ( p.disabled ? 0.3 : 1 )};
  padding-bottom: ${p => ( p.isSubAccountsExpanded ? "20px" : "0" )};
  height: 54px;

  & * {
    color: ${p => ( p.disabled ? p.theme.colors.palette.text.shade100 : "auto" )};
    fill: ${p => ( p.disabled ? p.theme.colors.palette.text.shade100 : "auto" )};
  }
`;

interface CurrencyRow {
  price: number;
  change: number;
  variation: number;
}

type Props = {
  index: number,
  name: string,
  short_name: string,
  currency: CurrencyRow,
  counterValueCurrency: Currency,
  style: Map<string, string>,
};

function MarketRowItem(props: Props) {
  const history = useHistory();
  const { index, style, currency, counterValueCurrency } = props;
  const {
    currency: {
      name,
      symbol,
      market_cap_rank,
      current_price,
      price_change_percentage_in_currency,
      image,
    },
  } = props;

  const onCurrencyClick = useCallback(
    (account: Account | TokenAccount, parentAccount: ?Account) => {
      setTrackingSource("accounts page");
      history.push({
        pathname: `/market/${currency.id}`,
        state: currency
      });
    },
    [history]
  );

  const onBuy = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      setTrackingSource("cryptocurrency actions");
      history.push({
        pathname: "/exchange",
        state: {
          defaultCurrency: currency
        }
      });
    },
    [currency, history]
  );

  const onSwap = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      setTrackingSource("cryptocurrency actions");
      history.push({
        pathname: "/swap",
        state: {
          defaultCurrency: currency
        }
      });
    },
    [currency, history]
  );

  const overflowStyles = { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" };

  return (
    <div style={{ ...style }} onClick={onCurrencyClick}>
      <Row expanded={true}>
        <RowContent>
          <Cell
            style={{ maxWidth: "40px" }}
            flex="5%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            fontSize={4}
          >
            {market_cap_rank}
          </Cell>
          <Cell
            shrink
            grow
            flex="40%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            fontSize={4}
          >
            <CryptoCurrencyIconWrapper>
              <img src={image} />
            </CryptoCurrencyIconWrapper>
            <div style={{ ...overflowStyles, paddingLeft: 15, marginLeft: 4, width: "100%" }}>
              <Box horizontal alignItems="center">
                <Box alignItems="left" pr={16}>
                  {name}
                  <CurrencyTicker style={{ paddingLeft: 0, paddingBottom: 0, paddingTop: 0 }}>
                    {symbol.toUpperCase()}
                  </CurrencyTicker>
                </Box>
                <Button outlineGrey small mr={20} onClick={onBuy}>
                  Buy
                </Button>
                <Button outlineGrey small onClick={onSwap}>
                  Swap
                </Button>
              </Box>
            </div>
          </Cell>
          <Cell
            shrink
            grow
            flex="20%"
            ff="Inter|SemiBold"
            horizontal
            justifyContent="flex-end"
            alignItems="center"
            fontSize={4}
          >
            <FormattedVal
              style={{ textAlign: "right" }}
              val={current_price * 100}
              unit={counterValueCurrency.units[0]}
              color="palette.text.shade100"
              showCode
            />
          </Cell>
          <Cell
            shrink
            grow
            flex="15%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            justifyContent="flex-end"
            alignItems="center"
            fontSize={4}
          >
            <FormattedVal
              isPercent
              animateTicker
              isNegative
              val={price_change_percentage_in_currency.toFixed(2)}
              inline
              withIcon
            />
          </Cell>
          <Cell
            shrink
            grow
            flex="14%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            justifyContent="flex-start"
            fontSize={4}
          >
            <div style={{ maxWidth: "75px", maxHeight: "35px" }}>
              <Variation variation={currency.sparkline_in_7d} width={75} height={35} />
            </div>
          </Cell>
          <Cell
            shrink
            flex="1%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            justifyContent="flex-end"
            fontSize={4}
          >
            {/*<CryptocurrencyStar currency={currency} />*/}
          </Cell>
        </RowContent>
      </Row>
    </div>
  );
}

export default withRouter(MarketRowItem);
