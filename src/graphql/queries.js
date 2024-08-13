import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Query(
    $searchKeyword: String, 
    $orderDirection: OrderDirection, 
    $orderBy: AllRepositoriesOrderBy,
    $first: Int,
    $after: String) {
      repositories(
        searchKeyword: $searchKeyword, 
        orderDirection: $orderDirection, 
        orderBy: $orderBy,
        first: $first,
        after: $after,) {
      edges {
          node {
            ...RepoDetails
          }
        }
      pageInfo {
          endCursor
          startCursor
          hasNextPage
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
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    ...RepoDetails
    url
    reviews(first: $first, after: $after) {
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
      },
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
${REPO_DETAILS}
`