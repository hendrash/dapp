import { Icon } from "@material-ui/core";
import React from "react";
import { itemType } from "./itemList";
import "./SideNav.css";
const SideItem = (p: any, index: any) => {
  const param: itemType = p.param;
  return (
    <a className="link" href={param.index}>
      <li>
        <p className="item">{param.item} </p>
      </li> 
    </a>
   
  );
};
export default SideItem;