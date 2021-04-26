import Auth from "@aws-amplify/auth";
import React from "react";
import DButton from "../../components/DButton/DButton";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";


const Profile: React.FC = (props: any) => {
  
  const { to, staticContext, ...rest } = props;
  return (
    <div>
      <DButton onClick={() => {
        Auth.federatedSignIn()
        }} {...rest}>
        Sign In
      </DButton> 
      <DButton onClick={() => {
        Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})
        }} {...rest}>
        Sign With Google
      </DButton>
    </div>
  );
};
export default Profile;
