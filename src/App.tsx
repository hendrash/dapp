import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UniswapApi } from "./api/uniswap-api";
import { Box, Button } from "@material-ui/core";
import {MdShowChart} from "react-icons/md";
function App() {
  return (
    <div className="App-header App">
      <p className="glow">MY DEFI NOTES AND ANALYSIS</p>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Box className="boxStyle">
        <span >Swap Charts </span>
      <MdShowChart/>
         </Box>
    </div>
  );
}

export default App;
