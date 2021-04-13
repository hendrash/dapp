import { Box } from "@material-ui/core";
import { DButton } from "./DButton/DButton";

const UnlockButton=(props:any)=>{
    
    return(<DButton {...props}>Wallet Disconnected &#9747;</DButton>)
}
export default UnlockButton;
