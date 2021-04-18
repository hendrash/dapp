import { nodes } from "./getRpcUrl"

export const setupNetwork = async () => {
    const provider = (window as WindowChain).ethereum
    if (provider) {
        const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)
        try {
            provider.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: `0x${chainId.toString(16)}`,
                    chainName: 'Binance Smart Chain Mainnet',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'bnb',
                        decimals: 18
                    },
                    rpcUrls: nodes,
                    blockExplorerUrls: ['https://bscscan.com/']
                }
                ]
            })
            return 0;
        } catch (error) {
            console.error(error);
            return 1;
        }
    } else {
        console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
        return 2;
    }
}
export default setupNetwork