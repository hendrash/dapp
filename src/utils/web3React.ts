import { BscConnector } from '@binance-chain/bsc-connector'
import { ConnectorNames } from '@pancakeswap-libs/uikit'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import getNodeUrl from "./getRpcUrl"

const POLLING_INTERVAL = 12000
const rpcUrl= getNodeUrl()
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const walletconnect= new WalletConnectConnector({
    rpc:{[chainId]:rpcUrl as string},
    bridge:"https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
})
const bscConnector= new BscConnector({supportedChainIds:[chainId]})
const injected= new InjectedConnector({supportedChainIds: [chainId]})
export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector
}

export const getLibrary=(provider:any)=>{
    return provider;
}