import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import Text from "./Text";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import { View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { loading, error, data, refetch } = useQuery( ME, {
    variables: {includeReviews: true }
  } );  
  if (loading) return <Text>Loading...</Text>

  const reviews = data.me.reviews.edges
  
  const reviewList = reviews
    ? reviews.map( n => n.node)
    : [];

  return (
    <FlatList
      data={reviewList}
      renderItem={({ item }) => <ReviewItem item={item} showButton={true} refetch={refetch}/>}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default MyReviews