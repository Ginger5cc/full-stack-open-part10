import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const LOGIN = gql`
  mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    createdAt
    id
    rating
    repositoryId
    repository {
      ...RepoDetails 
    }
  }
}
${REPO_DETAILS}
`;