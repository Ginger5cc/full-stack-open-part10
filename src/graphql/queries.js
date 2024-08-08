import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Query($orderDirection: OrderDirection) {
    repositories(orderDirection: $orderDirection) {
      edges {
        node {
          id
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
}
`;


export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;