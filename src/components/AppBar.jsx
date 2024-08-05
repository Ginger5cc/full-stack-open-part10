import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    height: 100,
    backgroundColor: "#24292e",
    paddingLeft: 30,
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
        <Text 
            fontWeight="bold" 
            fontSize="subheading" 
            color="tab"
            >
            Repositories
        </Text>
    </Pressable>
  </View>;
};

export default AppBar;