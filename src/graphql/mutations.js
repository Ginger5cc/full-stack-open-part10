import { gql } from '@apollo/client';

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
  }
}
`;

export const SIGNUP = gql`
  mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    username
    id
  }
}
`

export const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
}
`;