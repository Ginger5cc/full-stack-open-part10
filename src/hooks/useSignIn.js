import { LOGIN } from '../graphql/mutations';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

import { useMutation } from '@apollo/client';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const result = await mutate({variables: {credentials : { username, password }}})
    await authStorage.setAccessToken(result.data.authenticate.accessToken)

    apolloClient.resetStore();
    return result
  };

  return [signIn, result];
};

export default useSignIn;