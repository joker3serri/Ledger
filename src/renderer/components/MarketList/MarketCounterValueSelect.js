// @flow
import React, { useCallback, useContext, useEffect, useMemo } from "react";

import Box from "~/renderer/components/Box";
import DropDownSelector from "~/renderer/components/DropDownSelector";
import Ellipsis from "~/renderer/components/Ellipsis";
import { AngleDown, Check, Item, TextLink } from "~/renderer/components/Breadcrumb/common";
import IconCheck from "~/renderer/icons/Check";
import IconAngleDown from "~/renderer/icons/AngleDown";
import IconAngleUp from "~/renderer/icons/AngleUp";
import Button from "~/renderer/components/Button";
import useTheme from "~/renderer/hooks/useTheme";
import { MarketContext } from "~/renderer/contexts/MarketContext";
import {
  GET_COUNTER_CURRENCIES,
  GET_MARKET_CRYPTO_CURRENCIES,
} from "~/renderer/contexts/actionTypes";

export const MarketCounterValueSelect = () => {
  // const { counterCurrency, counterCurrencies } = useSelector(state => state.market);
  const { contextState, contextDispatch } = useContext(MarketContext);
  const { counterCurrency, counterCurrencies, error } = contextState;

  const theme = useTheme();
  // const dispatch = useDispatch();

  useEffect(() => {
    if (!counterCurrencies[0] && !error) {
      contextDispatch(GET_COUNTER_CURRENCIES);
    }
  }, [counterCurrencies, contextDispatch, error]);

  const onCounterValueSelected = useCallback(
    item => {
      contextDispatch(GET_MARKET_CRYPTO_CURRENCIES, { counterCurrency: item.value });
    },
    [contextDispatch],
  );

  const renderItem = useCallback(({ item, isActive }) => {
    return (
      <Item key={item.key} isActive={isActive}>
        <Ellipsis ff={`Inter|${isActive ? "SemiBold" : "Regular"}`} fontSize={4}>
          {item.label}
        </Ellipsis>
        {isActive && (
          <Check>
            <IconCheck size={14} />
          </Check>
        )}
      </Item>
    );
  }, []);

  const items = useMemo(
    () =>
      counterCurrencies.map(item => {
        item.key = item.value;
        return item;
      }),
    [counterCurrencies],
  );

  return (
    <Box horizontal flow={2} alignItems="center" justifyContent="flex-end">
      <DropDownSelector
        border
        horizontal
        items={items}
        renderItem={renderItem}
        onChange={onCounterValueSelected}
        controlled
        value={items.find(a => a.value === counterCurrency)}
      >
        {({ isOpen, value }) =>
          value ? (
            <Box flex={1} horizontal>
              <TextLink shrink>
                <Button style={{ color: theme.colors.palette.primary.main }}>
                  <Ellipsis>{value.label}</Ellipsis>
                </Button>
                <AngleDown>
                  {isOpen ? <IconAngleUp size={16} /> : <IconAngleDown size={16} />}
                </AngleDown>
              </TextLink>
            </Box>
          ) : null
        }
      </DropDownSelector>
    </Box>
  );
};
