import "./HorizontalBar.css";
import "../../style/shared.css";
const HorizontalBar = (onClick:any): JSX.Element => {
  return (
    <div >
      <p className="_glowHover expandable" onClick={onClick.onClick}>&#9776;</p>
    </div>
  );
};
export default HorizontalBar;
