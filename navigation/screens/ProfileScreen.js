import { useState } from 'react';
import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import List from '../components/List';
import SearchBar from '../components/SearchBar';

export default function ProfileScreen({navigation}){
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  

  return(
    <View style={styles.root}>
      <Text style={styles.title}>Add Allergies</Text>
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
      <List searchPhrase={searchPhrase} data={FOODS} setClicked={setClicked} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 40,
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
