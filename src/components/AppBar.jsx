import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    height: 100,
    backgroundColor: "#24292e",
    paddingLeft: 30,
    display: 'flex',
    flexDirection: "row",
    gap: 20,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab title="Repositories"/>
      <AppBarTab title="Sign In"/>
    </ScrollView>  
  </View>;
};

export default AppBar;