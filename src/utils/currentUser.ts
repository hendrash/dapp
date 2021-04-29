import Auth from "@aws-amplify/auth";
import { useEffect, useState } from "react";

const GetCognitoUser = async () => {

    const [cognitoUser, setCognitoUser] = useState()
    useEffect(() => {
        try {
            const currentUser = async function () {
                return await Auth.currentAuthenticatedUser();
            }
            currentUser().then(t => {
                setCognitoUser(t)

            })
        } catch (error) {
            return error;
        }
    }, [])
    return cognitoUser;
}
export default GetCognitoUser;
