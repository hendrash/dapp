/// <reference types="react-scripts" />
interface WindowChain{
    ethereum?:{
        isMetaMast?:true
        request:(...args: any[])=>void;
    }
}