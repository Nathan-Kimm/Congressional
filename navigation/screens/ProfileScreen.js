import { useState } from 'react';
import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function ProfileScreen({navigation}){
  const [search, setSearch] = useState("");
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      onPress = {() => navigation.navigate('Home')}
      style = {{fontSize: 26, fontWeight: 'bold'}}>Restaurants!</Text>
      <TextInput style = {styles.input} value = {search} onChangeText = {setSearch} />
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
});
