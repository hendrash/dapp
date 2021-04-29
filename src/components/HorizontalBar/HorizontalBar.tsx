import { Auth } from "aws-amplify";
import React from "react";
import "../../style/shared.css";
import DButton from "../DButton/DButton";
import UnlockButton from "../UnlockButton";
import "./HorizontalBar.css";

const HorizontalBar = (props: any): JSX.Element => {
  return (
    <div>
      <ul className="unlock">
        <li className="inLine">
          <SignIn />
        </li>

        <li className="inLine">
          {" "}
          <UnlockButton />{" "}
        </li>
      </ul>
    </div>
  );
};
const SignIn: React.FC = (props: any) => {
  const { to, staticContext, ...rest } = props;
  return (
    <div>
      <DButton
        onClick={() => {
          Auth.federatedSignIn();
        }}
        {...rest}
      >
        {" "}
        Sign In{" "}
      </DButton>
    </div>
  );
};
export default HorizontalBar;
