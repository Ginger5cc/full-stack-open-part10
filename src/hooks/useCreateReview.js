import { CREATE_REVIEW } from '../graphql/mutations';

import { useMutation } from '@apollo/client';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryOwnerName, repositoryName, rating, review }) => {
   console.log('repositoryName is', repositoryName)
    const result = await mutate({
      variables: {
        review: {
          ownerName: repositoryOwnerName,
          repositoryName: repositoryName,
          rating: Number(rating),
          text: review
        }}
    })
    return result
  };

  return [createReview, result];
};

export default useCreateReview;