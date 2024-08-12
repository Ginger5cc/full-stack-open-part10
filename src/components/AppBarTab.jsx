import Text from './Text';
import { View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
      marginRight: 20,
    },
  });
  

const AppBarTab = ( {title}) => {
    let link = ''
    switch (title) {
        case "Sign In":
            link = '/signin'
            break
        case "Repositories":
            link = '/'
            break
        case "Sign Out":
            link = '/signout'
            break
        case "Create Review":
            link = '/createReview'
            break
        default: 
            break
    }
    return (
    <View style={styles.container}>
     <Link to={link}>
    
          <Text 
              fontWeight="bold" 
              fontSize="subheading" 
              color="tab"
              >
              {title}
          </Text>
    </Link>
      
    </View>);
  };
  
  export default AppBarTab;