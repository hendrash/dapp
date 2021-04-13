import { Box, Icon } from "@material-ui/core"
import "./DButton.css";
import "../../style/shared.css"
import React from "react";
export const DButton=({icon,...props}:{icon:string} )=>{
   let cast:any= props; 
return (<Box className="backGround _glowHover" {...props}>
{cast.children} 
</Box>)
}
