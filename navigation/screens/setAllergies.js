import * as React from 'react';
import { View, Text, TextInput, Button, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import List from '../components/List';
import SearchBar from '../components/SearchBar';

export default function SetAllergies({navigation}){
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const allergies = [
    {
        'id': '1',
        'name': 'Tree Nuts',
        'details': 'Almonds, Walnuts, Pecans',
    },
    {
        'id': '2',
        'name': 'Milk',
        'details': '',
    },
    {
        'id': '3',
        'name': 'Egg',
        'details': '',
    },
    {
        'id': '4',
        'name': 'Crustacean Shellfish',
        'details': 'crab, lobster, shrimp, oysters, clams',
    },
    {
        'id': '5',
        'name': 'Wheat',
        'details': 'Almonds, Walnuts, Pecans',
    },
    {
        'id': '6',
        'name': 'Peanuts',
        'details': '',
    },
    {
        'id': '7',
        'name': 'Soybean',
        'details': '',
    },
    {
        'id': '8',
        'name': 'Sesame',
        'details': '',
    },
  ];

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>Add Allergies</Text>
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
      <List searchPhrase={searchPhrase} data={allergies} setClicked={setClicked} />
      <Pressable style = {styles.button} onPress = {() => navigation.navigate('Home Navigation')}>
        <Text style = {{fontWeight: 'bold', fondSize: 26, left: 10}}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#86f7a0',
    top: 20,
    height: 40,
    justifyContent: 'center',
    width: 400,
    textAlign: 'center',
  },
  textInput: {
    width: 400,
    height: 40,
    margin: 25,
    borderWidth: 2,
    borderRadius: 5,
  },
});
