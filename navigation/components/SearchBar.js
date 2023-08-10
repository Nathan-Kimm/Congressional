import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
                <TextInput style={styles.input} placeholder="Search" value={searchPhrase} onChangeText={setSearchPhrase} onFocus={() => {setClicked(true);}} />
                <Entypo name="cross" size={20} color="black" style={{ padding: 1, marginLeft: 50 }} onPress={() => {setSearchPhrase("")}} />
            </View>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    borderRadius: 5,
  },
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
