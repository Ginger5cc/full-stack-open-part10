import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Query($orderDirection: OrderDirection) {
    repositories(orderDirection: $orderDirection) {
    edges {
        node {
          ...RepoDetails
        }
      }
}
}
${REPO_DETAILS}
`;


export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const GET_SINGLE_REPO = gql`
  query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    ...RepoDetails
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
${REPO_DETAILS}
`