import { StyleSheet } from "react-native"
import { Searchbar } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 10,
  },
})

const SearchBar = ({searchQuery, setSearchQuery}) => {
  
  return(
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="view"
        style={styles.container}
        autoCapitalize='none'
    />
  )
}

export default SearchBar