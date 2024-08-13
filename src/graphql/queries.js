import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
  query Me ($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews){
        edges {
          node {
            rating
            createdAt
            user {
              username
            }
            text
            id
            repositoryId
          }
      }
    }
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