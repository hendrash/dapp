import React, { useState } from "react";
import UnlockButton from "../../components/UnlockButton";
import "./Home.css"

const Home=()=>{
    const [pendingTx, rerender]=useState(false)
    console.log(pendingTx)
    // console.log(rerender(false))

    console.log(pendingTx)
    return(<div >
       <UnlockButton/> 
        Home</div>)
}
export default Home;