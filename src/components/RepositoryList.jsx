import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { Text } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];


    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item} />}
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

  //const repos = data.repositories.edges.map( n => n = n.node)
  const repositories = data.repositories
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;