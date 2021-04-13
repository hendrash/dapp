import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { useCallback } from 'react';
import { useToast } from '../state/hooks';
import { ConnectorNames } from '../state/walletModel';
import { connectorsByName } from '../utils/web3React';
const useAuth=()=>{
    const {activate, deactivate}= useWeb3React()
    const {toastError}= useToast()
    const login=useCallback((connectorID: ConnectorNames)=>{
        const connector= connectorsByName[connectorID]
        if(connector){
            
        }
    },[])
}
export default useAuth;