import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import { useNavigate } from "react-router-native";
import Sort from './Sort';
import useRepositories from '../hooks/useRepositories';
import SearchBar from './SearchBar';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, setSelectedSorting }) => {
  
  const navigate = useNavigate()
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
    return (
      <>
      <SearchBar/>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <Pressable onPress={ () => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} showButton={false}/>
          </Pressable>
        }
        ListHeaderComponent={() => <Sort setSelectedSorting={setSelectedSorting}/>}
        keyExtractor={item => item.id}
      />
      </>
    );
};

const RepositoryList = () => {
  const [selectedSorting, setSelectedSorting] = useState("Latest");
  let result = useRepositories("CREATED_AT", "DESC")
  switch (selectedSorting) {
    case "Latest":
      result = useRepositories("CREATED_AT", "DESC")
      break
    case "Highest":
      result = useRepositories("RATING_AVERAGE", "DESC")
      break
    case "Lowest":
      result = useRepositories("RATING_AVERAGE", "ASC")
      break
    default:
      result = useRepositories("CREATED_AT", "DESC")
      break
  }

  return <RepositoryListContainer repositories={result} setSelectedSorting={setSelectedSorting} />;
};

export default RepositoryList;