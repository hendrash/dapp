import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  connectorLocalStorageKey,
  ConnectorNames
} from "@pancakeswap-libs/uikit";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from "@web3-react/walletconnect-connector";
import { useCallback } from "react";
import { resp } from "../response";
import toastHandler from "../state/toasts/toastHandler";
import { setupNetwork } from "../utils/wallet";
import { connectorsByName } from "../utils/web3React";

const useAuth = () => {
  // this function doesnt execute when button is triggered
  const { activate, deactivate } = useWeb3React();
  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork();
          if (hasSetup === 0) {
            activate(connector).then(t=>{
            });
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (
            error instanceof NoEthereumProviderError ||
            error instanceof NoBscProviderError
          ) {
            return toastHandler({ response: resp.PROVIDER });
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector;
              walletConnector.walletConnectProvider = null;
            }
            return toastHandler({ response: resp.AUTHORIZATION });
          } else {
            return toastHandler({
              response: resp.REQUEST_PENDING,
              message: error.message,
            });
          }
        }
      })
        // .then((t) => {
        //   console.log(t);
        // }).catch((error) => {
        //   console.log(error);
        // });
    } else {
      return toastHandler({ response: resp.CANT_FIND_CONNECTOR });
    }
    //Not sure what goes here
    // return toastHandler({ response: resp.INJECTED });
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [activate]);
  return { login, logout: deactivate };
};
export default useAuth;
