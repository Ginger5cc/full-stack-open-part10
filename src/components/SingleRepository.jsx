import { useQuery } from "@apollo/client";
import RepositoryItem from "./RepositoryItem";
import { GET_SINGLE_REPO } from "../graphql/queries";
import Text from "./Text";
import { useParams } from "react-router-native";
import ReviewItem from "./ReviewItem";
import { FlatList } from "react-native";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const {id} = useParams()

  const { data, error, loading, fetchMore } = useQuery( GET_SINGLE_REPO, { 
    fetchPolicy: 'cache-and-network',
    variables: { 
      repositoryId: id,
      first: 4
    },
  } );

  const handleFetchMore = () => {
    
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first: 4
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore()
    console.log('You have reached the end of the list');
  };


  if (loading) return <Text>Loading...</Text>

  const reviews = data.repository.reviews.edges
  
  const reviewList = reviews
    ? reviews.map( n => n.node)
    : [];

  return (
    <FlatList
      data={reviewList}
      renderItem={({ item }) => <ReviewItem item={item} showButton={false} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={data.repository} showButton={true} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository 