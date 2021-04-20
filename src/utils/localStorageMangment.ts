import { useCallback } from "react"

const setConnected = (b: boolean) => localStorage.setItem("connected", String(b))
const GetConnected = () => useCallback(() => {
    return (localStorage.getItem("connected") === 'true')
}, [setConnected])

const setAddress =(addr:string)=>localStorage.setItem("address",addr)
const GetAddress=()=> useCallback(()=>{
    return (localStorage.getItem("address")); 
},[setAddress])

export { setConnected, GetConnected, setAddress, GetAddress }
