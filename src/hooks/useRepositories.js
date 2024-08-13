import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Text from "../components/Text";

const useRepositories =  (orderByValue, orderDirectionValue) => {
  const { data, error, loading } = useQuery( GET_REPOSITORIES, {
    variables: { 
      orderBy: orderByValue,
      orderDirection: orderDirectionValue
    },
  } ); 
  if (!loading) {
    return data.repositories;
  }
  
  
};

export default useRepositories;