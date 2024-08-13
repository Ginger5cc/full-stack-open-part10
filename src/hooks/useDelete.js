import { DELETE_REVIEW } from '../graphql/mutations';


import { useMutation } from '@apollo/client';

const useDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);


  const deleteReview = async ( reviewId ) => {

    const result = await mutate({variables: {deleteReviewId: reviewId}})
    
    return result
  };

  return [deleteReview, result];
};

export default useDelete;