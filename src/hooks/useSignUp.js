import { SIGNUP } from '../graphql/mutations';


import { useMutation } from '@apollo/client';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGNUP);


  const signUp = async ({ username, password }) => {
    const result = await mutate({variables: {user : { username, password }}})
    
    return result
  };

  return [signUp, result];
};

export default useSignUp;