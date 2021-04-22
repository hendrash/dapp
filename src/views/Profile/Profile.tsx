import { withAuthenticator } from 'aws-amplify-react'
import { Theme } from './config'
import Amplify from 'aws-amplify'
import awsconfig from '../../aws-exports'
Amplify.configure(awsconfig)
const Profile: React.FC=()=>{ 
return (<></>)
}
export default withAuthenticator(Profile)