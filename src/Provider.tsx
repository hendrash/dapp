import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { getLibrary } from "./utils/web3React";
import { Provider } from 'react-redux'
import store from './state'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from '@pancakeswap-libs/uikit'


const Providers: React.FC=({children})=>{
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <HelmetProvider>
                    {children}
                    {/* <ModalProvider>{children}</ModalProvider> */}
                </HelmetProvider>
            </Provider>
        </Web3ReactProvider>
    )
}
export default Providers;