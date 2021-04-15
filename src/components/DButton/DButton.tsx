import { Box } from "@material-ui/core";
import React from "react";
import "../../style/shared.css";
import "./DButton.css";

 const DButton=({icon,...props}:{icon:string} )=>{
   const cast:any= props; 
return (<Box className="backGround _glowHover" {...props}>
{cast.children} 
</Box>)
}

export default DButton;
