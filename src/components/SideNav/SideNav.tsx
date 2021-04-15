import React from "react";
import { items } from "./itemList";
import SideItem from "./SideItem";
import "./SideNav.css";
// import {scaleRotate as Slider} from 'react-burger-menu'
const SideNav = (...props): JSX.Element => {
  // <MetisMenu/>
  const temp=items;
  return (
    <div>
      <nav>

      <ul>
    {temp.map((item, index)=>
    { 
      return (<SideItem key={"sideItem-"+index} param={item}/>);
    }
      )
  } 
</ul>
</nav>
   </div>
  );
};
export default SideNav;