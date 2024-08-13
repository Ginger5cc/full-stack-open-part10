import { View, TextInput, StyleSheet } from "react-native"
import { useState } from "react"
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 10,
  },
})

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 1000);
  
  return(
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="view"
        style={styles.container}
    />
  )
}

export default SearchBar