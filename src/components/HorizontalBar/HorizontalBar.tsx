import "./HorizontalBar.css";
import "../../style/shared.css"
const HorizontalBar= (): JSX.Element=>{
return (
    <div className="horizontalBar">

        <ul className="horizontalBar active">
            <li className="horizontalBar">
                <p className="verticalCode _glowHover" >&#9776;</p>
            </li>
        </ul>
    </div>
)
}
export default HorizontalBar;