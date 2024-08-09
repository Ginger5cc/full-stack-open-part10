import Text from "./Text"
import { StyleSheet, View } from "react-native"
import { format } from 'date-fns'

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#ffffff",
    alignSelf: 'stretch',
  },
  rating: {
    borderColor: "#0366d6",
    borderStyle: "solid",
    borderWidth:3,
    borderRadius: 25,
    width: 50,
    height:50,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  ratingText:{
    color: "#0366d6",
    fontSize: 20,
    fontWeight: '700',
  },
  textBox: {
    flexShrink: 1,
    alignSelf: 'stretch',
  }
})
const ReviewItem = ({item}) => {
  console.log('item is', item)
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
      <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <View style={styles.textBox}>
        <Text fontSize="subheading" fontWeight="bold">{item.user.username}</Text>
        <Text color="textSecondary">{format(item.createdAt, "MM-dd-yyyy")}</Text>
        <Text style={{lineHeight:16}}>{item.text}</Text>
      </View>
    </View>  
  )
}

export default ReviewItem