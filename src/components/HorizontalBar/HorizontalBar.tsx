import React from 'react';
import "../../style/shared.css";
import "./HorizontalBar.css";

const HorizontalBar = (onClick:any): JSX.Element => {
  return (
    <div >
      <p className="_glowHover expandable" onClick={onClick.onClick}>&#9776;</p>
    </div>
  );
};
export default HorizontalBar;
