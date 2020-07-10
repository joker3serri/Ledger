// @flow
import { ipcRenderer } from "electron";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import querystring from "query-string";
import { findCurrencyByTicker, parseCurrencyUnit } from "@ledgerhq/live-common/lib/currencies";
import { getAccountCurrency } from "@ledgerhq/live-common/lib/account";
import { accountsSelector } from "~/renderer/reducers/accounts";
import { openModal, closeAllModal } from "~/renderer/actions/modals";

const getAccountsOrSubAccountsByCurrency = (currency, accounts) => {
  const predicateFn = account => getAccountCurrency(account).id === currency.id;

  if (currency.type === "TokenCurrency") {
    const tokenAccounts = accounts
      .filter(acc => acc.subAccounts && acc.subAccounts.length > 0)
      .map(acc => {
        // $FlowFixMe why you do this Flow
        const found = acc.subAccounts.find(predicateFn);
        return found || null;
      })
      .filter(Boolean);

    return tokenAccounts;
  }

  return accounts.filter(predicateFn);
};

function useDeeplink() {
  const dispatch = useDispatch();
  const accounts = useSelector(accountsSelector);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const navigate = (url: string) => {
      if (url !== location.pathname) {
        history.push(url);
      }
    };

    const handler = (event: any, deeplink: string) => {
      const [, path] = deeplink.split("ledgerlive://");
      const { url, query } = querystring.parseUrl(path);

      switch (url) {
        case "accounts":
          navigate("/accounts");
          break;

        case "account": {
          const { currency } = query;
          if (!currency) return;

          const c = findCurrencyByTicker(currency.toUpperCase());
          if (!c || c.type === "FiatCurrency") return;

          const found = getAccountsOrSubAccountsByCurrency(c, accounts || []);
          if (!found.length) return;

          const [chosen] = found;
          if (chosen.type === "Account") {
            navigate(`/account/${chosen.id}`);
          } else {
            navigate(`/account/${chosen.parentId}/${chosen.id}`);
          }

          break;
        }

        case "delegate":
        case "receive":
        case "send": {
          const modal =
            url === "send" ? "MODAL_SEND" : url === "receive" ? "MODAL_RECEIVE" : "MODAL_DELEGATE";
          const { currency, recipient, amount } = query;
          if (!currency) return;

          const c = findCurrencyByTicker(currency.toUpperCase());
          if (!c || c.type === "FiatCurrency") return;

          const found = getAccountsOrSubAccountsByCurrency(c, accounts || []);
          if (!found.length) return;

          const [chosen] = found;
          dispatch(closeAllModal());
          if (chosen.type === "Account") {
            dispatch(
              openModal(modal, {
                account: chosen,
                recipient,
                amount: amount ? parseCurrencyUnit(c.units[0], amount) : undefined,
              }),
            );
          } else {
            dispatch(
              openModal(modal, {
                account: chosen,
                parentAccount: accounts.find(acc => acc.id === chosen.parentId),
                recipient,
                amount: amount ? parseCurrencyUnit(c.units[0], amount) : undefined,
              }),
            );
          }

          break;
        }

        case "portfolio":
        default:
          navigate("/");
          break;
      }
    };

    // subscribe to deep-linking event
    ipcRenderer.on("deep-linking", handler);

    return () => ipcRenderer.removeListener("deep-linking", handler);
  }, [location, history, accounts, dispatch]);
}

export default useDeeplink;
