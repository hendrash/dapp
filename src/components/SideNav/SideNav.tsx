import React from "react";
import { items } from "./itemList";
import SideItem from "./SideItem";
import "./SideNav.css";
// import {scaleRotate as Slider} from 'react-burger-menu'
const SideNav = (...props:any): JSX.Element => {
  // <MetisMenu/>
  const temp=items;
  return (
    <div>
      <nav>

      <ul>
    {temp.map((item, index)=>
    { 
      console.log(index);
      return (<SideItem key={"sideNav-"+index} param={item}/>);
    }
      )
  } 
</ul>
</nav>
   </div>
  );
};
export default SideNav;