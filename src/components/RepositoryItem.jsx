import { View, StyleSheet, Image } from "react-native"
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor: "#ffffff",
    marginBottom: 8,
    
  },
  flexItem: {
    display: 'flex',
    flexDirection: "row",
    gap: 20,
    marginBottom:20,
  },
  flexItem2: {
    display: 'flex',
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
  description: {
    flexGrow: 1,
    flex: 1,
  }
});


const RepositoryItem = ({item}) => {
    return (
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
            <Image
            style={styles.tinyLogo}
            source={require('../img/icon_large.webp')}
          />
          <View style={styles.flexItem2}>
            <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
            <View style={styles.description}>
              <Text>{item.description}</Text>
             </View>
            <Text>{item.language}</Text>
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
      </View>
    );
  };
  
  export default RepositoryItem;