// @flow

import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Box from "~/renderer/components/Box";
import MarketRowItem from "~/renderer/components/MarketList/MarketRowItem";
import { useSelector } from "react-redux";
import { counterValueCurrencySelector } from "~/renderer/reducers/settings";
import { useMarketCurrencies } from "~/renderer/actions/market";
import styled from "styled-components";
import { useRange } from "~/renderer/hooks/useRange";
import SortIcon from './SortIcon'
import type { ThemedComponent } from "~/renderer/styles/StyleProvider";

const SortIconStyled = styled(SortIcon)`
  margin: 0 5px;

  & * {
    color: ${p => ( p.theme.colors.palette.text.shade60 )};
    fill: ${p => ( p.theme.colors.palette.text.shade60 )};
  }
`

const ListStyled = styled(List)`
  margin-top: 0;
  background: ${p => p.theme.colors.palette.background.paper};

  &::-webkit-scrollbar {
    width: 5px;
  }
`

const ColumnTitleBox = styled(Box)`
  padding: 10px 20px;
`;

const Row: ThemedComponent<{}> = styled(Box)`
  background: ${p => p.theme.colors.palette.background.paper};
  border: 1px solid transparent;
  box-shadow: 0 4px 8px 0 #00000007;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 600;
  justify-content: flex-start;
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
    color: ${p => ( p.theme.colors.palette.text.shade60 )};
    fill: ${p => ( p.theme.colors.palette.text.shade60 )};
  }
`;

type CurrencyRowProps = {
  index: number,
  style: Map < string, string >,
}
;

type MarketListProps = {
  search: string,
};

function MarketList(props: MarketListProps) {
  const { search } = props;

  // TODO: should be changed to use values from dropdowns
  const counterValueCurrency = useSelector(counterValueCurrencySelector);
  const range = "day";

  const { rangeData } = useRange(range);
  const currencies = useMarketCurrencies({ counterValueCurrency, ...rangeData });

  let visibleCurrencies = [];
  const hiddenCurrencies = [];
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

  const onSort = key => {
    if (key === orderBy) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(key);
    }
  };

  visibleCurrencies = sortCurrencies(visibleCurrencies, orderBy, order);

  const CurrencyRow = ({ index, style }: CurrencyRowProps) => (
    <MarketRowItem
      currency={visibleCurrencies[index]}
      index={index + 1}
      counterValueCurrency={counterValueCurrency}
      style={style}
      rangeData={rangeData}
    />
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
            <SortIconStyled order={orderBy === "name" ? order : ""} />
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
            <SortIconStyled order={orderBy === "counterValue" ? order : ""} />
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
            <SortIconStyled order={orderBy === "change" ? order : ""} />
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
      <ListStyled
        height={500}
        width="100%"
        itemCount={visibleCurrencies.length}
        itemSize={56}
        style={{ overflowX: "hidden" }}
      >
        {CurrencyRow}
      </ListStyled>
    </Box>
  );
}

export default MarketList;

export const matchesSearch = (search
  ? : string, currency, subMatch
:
boolean = false
):
boolean => {
  if (!search) return true;
  const match = `${currency.ticker}|${currency.name}}`;
  return match.toLowerCase().includes(search.toLowerCase()) || subMatch;
};

const sortCurrencies = (currencies, key, order) => {
  if (typeof currencies[key] === "string") {
    currencies[key] = currencies[key].toLowerCase();
  }
  return currencies.sort(function (a, b) {
    const orders = {
      asc: (a, b) => ( a > b ? 1 : -1 ),
      desc: (a, b) => ( a < b ? 1 : -1 ),
    };
    return orders[order](a[key], b[key]);
  });
};
