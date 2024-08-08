import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import SignIn from './SignIn';

const SignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    }
  signOut(); 
  console.log('log out')
  return <SignIn />
  
}

export default SignOut