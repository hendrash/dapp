import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "../state";
import { getLibrary } from "../utils/web3React";
import { ModelContextProvider } from "./modelProvider";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HelmetProvider>
          <ModelContextProvider>{children}</ModelContextProvider>
        </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  );
};
export default Providers;
