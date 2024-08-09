import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

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
  const { data, error, loading } = useQuery( ME, {
    fetchPolicy: 'cache-and-network',
  } );  
  console.log('data is', data)
  if (data){if (data.me) {
    return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab title="Repositories"/>
      <AppBarTab title="Sign Out"/>
    </ScrollView>  
  </View>;
  }}
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab title="Repositories"/>
      <AppBarTab title="Sign In"/>
    </ScrollView>  
  </View>;
};

export default AppBar;