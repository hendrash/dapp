import getNodeUrl from "./getRpcUrl"
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import Web3 from 'web3'
import { ConnectorNames } from "../state/walletModel"
import { BscConnector } from '@binance-chain/bsc-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
const POLLING_INTERVAL = 12000
const rpcUrl= getNodeUrl()
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)
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

export const getLibrary=(provider:any):Web3=>{
    return provider;
}