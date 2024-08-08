import Text from './Text';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const SignInSuccess = () => {

  const { data, error, loading } = useQuery( ME, {
    fetchPolicy: 'cache-and-network',
  } ); 
  console.log('data is', data)
  return <Text>logged in successfully</Text>
}

export default SignInSuccess