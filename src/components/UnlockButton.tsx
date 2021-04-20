import { ConnectorNames } from "@pancakeswap-libs/uikit";
import React from "react";
import 'react-toastify/dist/inject-style';
import 'react-toastify/dist/ReactToastify.css';
import "../../src/style/shared.css";
import useAuth from "../hooks/useAuth";
import { GetConnected, setAddress, setConnected } from "../utils/localStorageMangment";
import { getSelectedAddress } from "../utils/wallet";
import DButton from "./DButton/DButton";


const UnlockButton = (props: any) => {
  const { login, logout } = useAuth();
  return (
    <DButton
      onClick={() => {
         login(ConnectorNames.Injected);
          const address=getSelectedAddress();
          if(address){
            setConnected(true);
            setAddress(address)
          }
        }
    }
      {...props}
    >
      { GetConnected()() ?'Wallet Connected':'Wallet Disconnected'}
    </DButton>
  );
};
export default UnlockButton;
