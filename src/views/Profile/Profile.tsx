import React from "react";
import DButton from "../../components/DButton/DButton";

const Profile: React.FC = (props: any) => {
  return (
    <>
      <DButton onClick={() => {}} {...props}>
        Sign In
      </DButton>
      <DButton onClick={() => {}} {...props}>
        Sign With Google
      </DButton>
    </>
  );
};
export default Profile;
