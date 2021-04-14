import { Box } from "@material-ui/core";
import React from "react";
import "../../style/shared.css";
import "./DButton.css";
export const DButton=({icon,...props}:{icon:string} )=>{
   let cast:any= props; 
return (<Box className="backGround _glowHover" {...props}>
{cast.children} 
</Box>)
}
