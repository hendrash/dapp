import { ConnectorNames, useWalletModal } from "@pancakeswap-libs/uikit";
import React from "react";
import "../../src/style/shared.css";
import useAuth from "../hooks/useAuth";
import DButton from "./DButton/DButton";

const UnlockButton = (props: any) => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);
  return (
    <DButton
      onClick={() => {
    login(ConnectorNames.Injected) 
        onPresentConnectModal();
      }}
      {...props}
    >
      Wallet Disconnected &#9747;

    </DButton>
      // <MetaMaskLoginButton className="backGround _glowHover"/>
  );
};
export default UnlockButton;
