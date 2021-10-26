// @flow
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Box from "~/renderer/components/Box";
import Label from "~/renderer/components/Label";
import Button from "~/renderer/components/Button";
import Ellipsis from "~/renderer/components/Ellipsis";
import { closePlatformAppDrawer } from "~/renderer/actions/UI";
import { getMarketCryptoCurrencies, setMarketFilters } from "~/renderer/actions/market";
import CheckBox from "~/renderer/components/CheckBox";

type ShowProps = {
  value: string,
  onValueChange: (value: string) => void,
};
type MarketFiltersFooterProps = {
  onClearAll: () => void,
  onApply: () => void,
};

const Divider = styled(Box)`
  border: 1px solid ${p => p.theme.colors.palette.divider};
`;

const BasicButton = styled(Button)`
  padding: 15px 24px;
  border-radius: 48px;
  color: #6490f1;
`;

const SectionWrapper = styled.div`
  margin-bottom: 40px;

  &.platform {
    .scrollable-block {
      max-height: 160px;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 3px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${p => p.theme.colors.palette.text.shade20};
      }
    }
  }
`;

const SectionTitle = styled.div`
  background: ${p => p.theme.colors.palette.text.shade5};
  border-radius: 4px;
  font-size: 12px;
  padding: 8px 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const FooterWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Show = ({ value, onValueChange }: ShowProps) => {
  const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Ledger Live Compatible",
      value: "isLedgerCompatible",
    },
    {
      label: "Starred Assets",
      value: "isFavorite",
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle>Show</SectionTitle>
      {options.map(option => (
        <Box key={option.value} px={3} pt={5} horizontal alignItems="center">
          <CheckBox
            isChecked={value === option.value}
            isRadio
            onChange={value => onValueChange(option.value)}
          />
          <Label ml={14} color="palette.text.shade50" fontSize={12}>
            {option.label}
          </Label>
        </Box>
      ))}
    </SectionWrapper>
  );
};

const MarketFiltersFooter = ({ onApply, onClearAll }: MarketFiltersFooterProps) => {
  return (
    <FooterWrapper>
      <Divider />
      <Box px={5} py={4} horizontal justifyContent="space-between">
        <BasicButton onClick={() => onClearAll()}>
          <Ellipsis>Clear all</Ellipsis>
        </BasicButton>
        <Button primary onClick={() => onApply()}>
          <Ellipsis>Apply filters</Ellipsis>
        </Button>
      </Box>
    </FooterWrapper>
  );
};

function MarketFilters() {
  const savedFilters = useSelector(state => state.market.filters);
  const dispatch = useDispatch();
  const [isLedgerCompatible, setIsLedgerCompatible] = useState(savedFilters.isLedgerCompatible);
  const [isFavorite, setIsFavorites] = useState(savedFilters.isFavorite);

  const onClearAll = () => {
    setIsLedgerCompatible(false);
  };

  const currentValue = isFavorite
    ? "isFavorite"
    : isLedgerCompatible
    ? "isLedgerCompatible"
    : "all";

  const onChange = value => {
    switch (value) {
      case "isFavorite":
        setIsFavorites(true);
        setIsLedgerCompatible(false);
        break;
      case "isLedgerCompatible":
        setIsLedgerCompatible(true);
        setIsFavorites(false);
        break;
      default:
        setIsFavorites(false);
        setIsLedgerCompatible(false);
        break;
    }
  };

  const onApplyFilters = useCallback(() => {
    dispatch(setMarketFilters({ isLedgerCompatible, isFavorite }));
    dispatch(getMarketCryptoCurrencies());
    dispatch(closePlatformAppDrawer());
  }, [dispatch, isFavorite, isLedgerCompatible]);

  return (
    <Box>
      <Box pt={6} px={5}>
        <Show value={currentValue} onValueChange={value => onChange(value)} />
      </Box>
      <MarketFiltersFooter onClearAll={() => onClearAll()} onApply={() => onApplyFilters()} />
    </Box>
  );
}

export default MarketFilters;
