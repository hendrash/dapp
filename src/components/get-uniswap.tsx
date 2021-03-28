import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { UNISWAP } from "../schema/uniswap-schema";

export function GetUniswap(){
    const {error,loading, data}=useQuery(UNISWAP);
    useEffect(()=>{
        console.log(data);
    },[data])    
    return (
    <div> </div>)
}