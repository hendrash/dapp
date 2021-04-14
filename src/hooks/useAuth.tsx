import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import { useToast } from "../state/hooks";
import { connectorLocalStorageKey, ConnectorNames } from "../state/walletModel";
import { setupNetwork } from "../utils/wallet";
import { connectorsByName } from "../utils/web3React";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  const { toastError } = useToast();
  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork();
          if (hasSetup) {
            activate(connector);
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (
            error instanceof NoEthereumProviderError ||
            error instanceof NoBscProviderError
          ) {
            toastError("Provider Error", "No Provider was found");
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
              if(connector instanceof WalletConnectConnector){
                  const walletConnector= connector as WalletConnectConnector;
                  walletConnector.walletConnectProvider=null
              }
              toastError('Authorization Error','Please authorizie to access your account');
              
          }else{
              toastError(error.name, error.message);
          }
        }
      });
    } else {
        toastError("Can't find connector","The connector config is wrong")
    }
  }, []);
  console.log(login)
  console.log(deactivate)
  return {login, logout: deactivate}
};
export default useAuth;
