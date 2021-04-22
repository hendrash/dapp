import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from "react";
import { GetUniswap } from "../components/get-uniswap";
// export class uniswapApi{
   const errorLink= onError(({graphQLErrors, networkError})=>{
      if(graphQLErrors){
         graphQLErrors.map(({message, locations, path})=>{
            alert(`Graphql error ${message}`)
         })
      }
   })
   const link =(uri:string)=> from([
      errorLink,
      new HttpLink({uri})      
   ])
   const client = (uri: string)=>new ApolloClient({
      cache: new InMemoryCache(),
      link: link(uri)
   })
//  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"
   
// function api(){
//       return <ApolloProvider client={client}></ApolloProvider>
//    }
//    export default api;
   
export const UniswapApi=() =>(
  <ApolloProvider client={client("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2")}>
     <GetUniswap/>
  </ApolloProvider>)

// export function CreateApolloClient():ApolloClient<NormalizedCacheObject>{
//    return new ApolloClient({
//       link: new HttpLink({
//          uri:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"
//       }) ,
//        cache: new InMemoryCache()
//    }) 
// }