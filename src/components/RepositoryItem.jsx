import { View, StyleSheet, Image, Pressable } from "react-native"
import Text from "./Text";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor: "#ffffff",
    marginBottom: 8,
    alignSelf: 'stretch',
    
  },
  flexItem: {
    display: 'flex',
    flexDirection: "row",
    gap: 20,
    marginBottom:20,
  },
  flexItem2: {
    display: 'flex',
    flexGrow: 1,
    flex: 1,
    gap: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flexDetails: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  flexDetailsItem: {
    display: 'flex',
    justifyContent: "center",
  },
  language:{
    backgroundColor: "#0366d6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf:'baseline',
    marginTop: 5,
  },
  githubButton:{
    marginTop: 16,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    paddingVertical:10,
  }
});


const RepositoryItem = ({item, showButton}) => {
    return (
      <View testID="repositoryItem"  style={styles.flexContainer}>
        <View style={styles.flexItem}>
            <Image
            style={styles.tinyLogo}
            source={{url: item.ownerAvatarUrl}}
          />
          <View style={styles.flexItem2}>
            <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
            <View style={styles.description}>
              <Text style={{lineHeight: 16}} color="textSecondary">{item.description}</Text>
             </View>
             <View style={styles.language}>
              <Text style={{color: "#ffffff"} }>{item.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexDetails}>
          <View style={styles.flexDetailsItem}>
              <Text fontWeight="bold" fontSize="subheading" align='center'>
                {item.stargazersCount>= 1000 ? `${Math.round(item.stargazersCount/1000 * 10) / 10}k` : item.stargazersCount}
              </Text>
              <Text fontWeight="normal" color="textSecondary" align='center' >Stars</Text>
            </View>
            <View style={styles.flexDetailsItem}>
              <Text fontWeight="bold" fontSize="subheading" align='center'>
                {item.forksCount>= 1000 ? `${Math.round(item.forksCount/1000 * 10) / 10}k` : item.forksCount}
              </Text>
              <Text fontWeight="normal" color="textSecondary" align='center'>Forks</Text>
            </View>
            <View style={styles.flexDetailsItem}>
              <Text fontWeight="bold" fontSize="subheading" align='center'>{item.reviewCount}</Text>
              <Text fontWeight="normal" color="textSecondary" align='center'>Reviews</Text>
            </View>
            <View style={styles.flexDetailsItem}>
              <Text fontWeight="bold" fontSize="subheading" align='center'>{item.ratingAverage}</Text>
              <Text fontWeight="normal" color="textSecondary" align='center'>Rating</Text>
          </View>
          
        </View>
        
        <Pressable style={showButton? styles.githubButton : {display: "none"}} onPress={() => Linking.openURL(item.url)} >
          <Text fontWeight="bold" fontSize="subheading" style={{color: "#ffffff", textAlign: "center"}}>Open In Github</Text>
        </Pressable>
        
      </View>
    );
  };
  
  export default RepositoryItem;