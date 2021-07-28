// @flow
import { createAction } from "redux-actions";
import type { AvailableProvider } from "@ledgerhq/live-common/lib/exchange/swap/types";
import { createSelector } from "reselect";
import type { OutputSelector } from "reselect";
import type { State } from "~/renderer/reducers";
import type { SwapStateType } from "~/renderer/reducers/swap";

export const updateProvidersAction = createAction<Array<AvailableProvider>>(
  "SWAP/UPDATE_PROVIDERS",
);
export const resetSwapAction = createAction("SWAP/RESET_STATE");

export const providersSelector: OutputSelector<
  State,
  void,
  $PropertyType<SwapStateType, "providers">,
> = createSelector(
  state => state.swap,
  swap => swap.providers,
);

export const currentProviderSelector: OutputSelector<
  State,
  void,
  $PropertyType<SwapStateType, "currentProvider">,
> = createSelector(
  state => state.swap,
  swap => swap.currentProvider,
);
