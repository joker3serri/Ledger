// @flow

import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Box from "~/renderer/components/Box";
import MarketRowItem from "~/renderer/components/MarketList/MarketRowItem";
import { useSelector } from "react-redux";
import { counterValueCurrencySelector } from "~/renderer/reducers/settings";
import { useMarketCurrenciesList } from "~/renderer/actions/market";
import type { ThemedComponent } from "~/renderer/styles/StyleProvider";
import styled from "styled-components";
import ArrowsUpDown from "~/renderer/icons/ArrowsUpDown";

const ColumnTitleBox = styled(Box)`
  padding: 10px 20px;
`;

const ArrowsUpDownIconWrapper = styled.div`
  padding: 0 5px
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
  //margin-bottom: 9px;
  position: relative;
  transition: background-color ease-in-out 200ms;
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

  & * {
    color: ${p => ( p.disabled ? p.theme.colors.palette.text.shade100 : "auto" )};
    fill: ${p => ( p.disabled ? p.theme.colors.palette.text.shade100 : "auto" )};
  }
`;

function MarketList(props) {
  const {
    emptyText,
    search,
  } = props;

  const counterValueCurrency = useSelector(counterValueCurrencySelector);

  const currencies = useMarketCurrenciesList();
  let visibleCurrencies = [];
  let hiddenCurrencies = [];
  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];
    if (matchesSearch(search, currency)) {
      visibleCurrencies.push(currency);
    } else {
      hiddenCurrencies.push(currency);
    }
  }

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("counterValue");

  const onSort = (key) => {
    if (key === orderBy) {
      setOrder(order === "desc" ? "asc" : "desc")
    } else {
      setOrderBy(key)
    }
  };

  visibleCurrencies = sortCurrencies(visibleCurrencies, orderBy, order);

  const CurrencyRow = ({ index, style }) => (
    <MarketRowItem currency={visibleCurrencies[index]} order_number={index + 1}
                   counterValueCurrency={counterValueCurrency}
                   style={style} />
  );

  return (
    <Box flow={2}>
      <Row expanded={true}>
        <RowContent>
          <ColumnTitleBox
            style={{ maxWidth: "40px" }}
            flex="5%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            fontSize={4}
          >
            #
          </ColumnTitleBox>
          <ColumnTitleBox
            shrink
            grow
            flex="40%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            fontSize={4}
            onClick={() => onSort("name")}
          >
            Name
            <ArrowsUpDownIconWrapper>
              <ArrowsUpDown size={10} />
            </ArrowsUpDownIconWrapper>
          </ColumnTitleBox>
          <ColumnTitleBox
            shrink
            grow
            flex="10%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            justifyContent="flex-end"
            alignItems="center"
            fontSize={4}
            onClick={() => onSort("counterValue")}
          >
            Price
            <ArrowsUpDownIconWrapper>
              <ArrowsUpDown size={10} />
            </ArrowsUpDownIconWrapper>
          </ColumnTitleBox>
          <ColumnTitleBox
            shrink
            grow
            flex="10%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            justifyContent="flex-end"
            alignItems="center"
            fontSize={4}
            onClick={() => onSort("change")}
          >
            % Change
            <ArrowsUpDownIconWrapper>
              <ArrowsUpDown size={10} />
            </ArrowsUpDownIconWrapper>
          </ColumnTitleBox>
          <ColumnTitleBox
            shrink
            grow
            flex="15%"
            ff="Inter|SemiBold"
            color="palette.text.shade100"
            horizontal
            alignItems="center"
            justifyContent="flex-start"
            fontSize={4}
          >
            Variation
          </ColumnTitleBox>
        </RowContent>
      </Row>
      <List
        height={500}
        width="100%"
        itemCount={visibleCurrencies.length}
        itemSize={65}
      >
        {CurrencyRow}
      </List>
    </Box>
  );
}

export default MarketList;

export const matchesSearch = (
  search?: string,
  currency,
  subMatch: boolean = false,
): boolean => {
  if (!search) return true;
  const match = `${currency.ticker}|${currency.name}}`;
  return match.toLowerCase().includes(search.toLowerCase()) || subMatch;
};

const sortCurrencies = (currencies, key, order) => {
  return currencies.sort(function(a, b) {
      const orders = {
        asc: (a, b) => ( a > b ? 1 : -1 ),
        desc: (a, b) => ( a < b ? 1 : -1 ),
      };
      return orders[order](a[key], b[key]);
    },
  );
};
