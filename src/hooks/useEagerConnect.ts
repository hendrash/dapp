import connectors from "@pancakeswap-libs/uikit/dist/widgets/WalletModal/config";
import { useEffect } from "react";
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit'
import useAuth from "./useAuth";

const _binanceChainListener = async () =>
    new Promise<void>((resolve) =>
        Object.defineProperty(window, 'BinanceChain', {
            get() {
                return this.bsc;
            },
            set(bsc) {
                this.bsc = bsc;
                resolve()
            },
        }),
    )

const useEagerConnect = () => {
    const {login}= useAuth()
    useEffect(()=>{
        const connectorId =window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
        if(connectorId){
            const isConnectorBinanceChain = connectorId===ConnectorNames.BSC
            const isBinanceChainDefined= Reflect.has(window,'BinanceChain')
            if(isConnectorBinanceChain&&!isBinanceChainDefined){
                _binanceChainListener().then(()=>login(connectorId))
                return
            }
            login(connectorId)
        }
    },[login])

}
export default useEagerConnect