import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { Text } from 'react-native';
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate()
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <Pressable onPress={ () => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} showButton={false}/>
          </Pressable>
        }
        keyExtractor={item => item.id}
      />
    );
};

const RepositoryList = () => {
  const { data, error, loading } = useQuery( GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderDirection:"ASC" },
  } ); 
  if (loading) return <Text>Loading ...</Text>

  const repositories = data.repositories
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;