import { useWalletModal } from "@pancakeswap-libs/uikit";
import React from "react";
import useAuth from "../hooks/useAuth";
import DButton from "./DButton/DButton";
const UnlockButton = (props: any) => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);
  return (
    <DButton
      onClick={() => {
        console.trace("trigger on present connectmodal");
        onPresentConnectModal();
      }}
      {...props}
    >
      Wallet Disconnected &#9747;
    </DButton>
  );
};
export default UnlockButton;
