export enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc"
}
export declare type Login=(connectorId:ConnectorNames)=> void;
export interface Config{
    title: string,
    icon: string,
    connectorId: ConnectorNames
}