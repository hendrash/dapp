import React from 'react';
import "../../style/shared.css";
import UnlockButton from '../UnlockButton';
import "./HorizontalBar.css";

const HorizontalBar = (onClick:any): JSX.Element => {
  return (
    <div >
    
<span className="unlock">
       <UnlockButton/> 
</span>
    </div>
  );
};
export default HorizontalBar;
