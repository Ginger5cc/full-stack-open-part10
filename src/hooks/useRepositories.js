import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories =  (selectedSorting, searchKeywordValue) => {
  let orderByValue="RATING_AVERAGE"
  let orderDirectionValue= ""
  switch (selectedSorting) {
    case "Latest":
      orderByValue="CREATED_AT"
      orderDirectionValue= "DESC"
      break
    case "Highest":
      orderByValue="RATING_AVERAGE"
      orderDirectionValue= "DESC"
      break
    case "Lowest":
      orderByValue="RATING_AVERAGE"
      orderDirectionValue= "ASC"
      break
    default:
      orderByValue="CREATED_AT"
      orderDirectionValue= "DESC"
      break
  }
  
  const { data, error, loading, fetchMore } = useQuery( GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { 
      orderBy: orderByValue,
      orderDirection: orderDirectionValue,
      searchKeyword: searchKeywordValue,
      first: 4
    },
  } ); 

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      fetchPolicy: 'cache-and-network',
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: orderByValue,
        orderDirection: orderDirectionValue,
        searchKeyword: searchKeywordValue,
        first: 4
      },
    });
  };
 
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
  }; 
};

export default useRepositories;