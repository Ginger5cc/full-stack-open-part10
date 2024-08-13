import Text from "./Text"
import { Pressable, StyleSheet, View, Alert } from "react-native"
import { format } from 'date-fns'
import { useNavigate } from "react-router-native";
import useDelete from "../hooks/useDelete";

const styles = StyleSheet.create ({
  outerContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor: "#ffffff",
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  container: {
    display: 'flex',
    flexDirection: "row",
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center"
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
  },
  viewButton:{
    marginTop: 16,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    paddingVertical:10,
    paddingHorizontal:20,
  },
  deleteButton:{
    marginTop: 16,
    backgroundColor: "#d73a4a",
    borderRadius: 5,
    paddingVertical:10,
    paddingHorizontal:20,
    
  }
  
})



const ReviewItem = ({item, showButton, refetch}) => {
  const navigate = useNavigate()
  const [deleteReview] = useDelete();

  const onDelete = (id) => {
  
    Alert.alert('Delete Review', 'Are you sure you want to delete this review', [
      {
        text: 'Cancel',
        onPress: () => console.log('CANCEL Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => {
        deleteReview(id);
        refetch(); 
      }},
    ]);
  }

  return (
    <View style={styles.outerContainer}>
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
      <View style={styles.buttonContainer}>
        <Pressable 
          style={showButton? styles.viewButton : {display: "none"}} 
          onPress={ () => navigate(`/${item.repositoryId}`)}
          >
            <Text fontWeight="bold" fontSize="subheading" style={{color: "#ffffff", textAlign: "center"}}>View repository</Text>
        </Pressable>
        <Pressable 
          style={showButton? styles.deleteButton : {display: "none"}} 
          onPress={() => onDelete(item.id)}
          >
          <Text fontWeight="bold" fontSize="subheading" style={{color: "#ffffff", textAlign: "center"}}>Delete review</Text>
        </Pressable>
      </View>
    </View>  
  )
}

export default ReviewItem