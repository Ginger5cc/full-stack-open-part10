import { FlatList, View, StyleSheet, Pressable,} from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import { useNavigate } from "react-router-native";
import Sort from './Sort';
import useRepositories from '../hooks/useRepositories';
import SearchBar from './SearchBar';
import { useDebounce } from 'use-debounce';

import React from 'react'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;


export class RepositoryListContainer extends React.Component {
  onEndReached = ({ distanceFromEnd }) => {
    if(!this.onEndReachedCalledDuringMomentum){
        this.onEndReachedCalledDuringMomentum = true;
        this.props.fetchMore()
    }
}

  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;
    this.onEndReachedCalledDuringMomentum = true;
    
    return (
      <>
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery} 
        />
      <Sort setSelectedSorting={props.setSelectedSorting}/>
      </>
    );
  };

  render() {
    const props = this.props;
    
    const repositoryNodes = props.repositories
    ? props.repositories.edges.map((edge) => edge.node)
    : [];
    
    
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <Pressable onPress={ () => props.navigate(`/${item.id}`)}>
            <RepositoryItem item={item} showButton={false}/>
          </Pressable>
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.onEndReached.bind(this)}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
      />
    );
  }
}
/*
export const Testing = ({ repositories, setSelectedSorting, searchQuery, setSearchQuery }) => {
  
  const navigate = useNavigate()
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
    return (
      <>
      
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <Pressable onPress={ () => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} showButton={false}/>
          </Pressable>
        }
        ListHeaderComponent={() => <>
        <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
        />
        <Sort setSelectedSorting={setSelectedSorting}/></>}
        keyExtractor={item => item.id}
      />
      </>
    );
}; */

const RepositoryList = () => {
  const navigate = useNavigate()
  const [selectedSorting, setSelectedSorting] = useState("Latest");
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 1000);
  
  
  let { repositories, fetchMore } = useRepositories(selectedSorting, value)
  
  return <RepositoryListContainer 
    repositories={repositories} 
    setSelectedSorting={setSelectedSorting}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery} 
    navigate={navigate}
    fetchMore={fetchMore}
    />;
};

export default RepositoryList;