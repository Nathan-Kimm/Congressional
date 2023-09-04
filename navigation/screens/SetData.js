import * as React from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import userData from '../Data';

export default function SetData({navigation}){
  const [ name, setName ] = useState(null);
  const [ age, setAge ] = useState(null);
  const [ weight, setWeight ] = useState(null);

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>Account Setup</Text>
      <Text style = {styles.text}>Name: </Text>
      <TextInput style = {styles.textInput} value = {name} onChangeText = {setName} placeholder = "Name" returnKeyType="done"/>
      <Text style = {styles.text}>Age: </Text>
      <TextInput style = {styles.textInput} value = {age} onChangeText = {setAge} placeholder = "Age" keyboardType = "number-pad" returnKeyType="done"/>
      <Text style = {styles.text}>Weight: </Text>
      <TextInput style = {styles.textInput} value = {weight} onChangeText = {setWeight} placeholder = "Lbs"  keyboardType = "number-pad" returnKeyType="done"/>
      <Pressable style = {styles.button} onPress = {() => navigation.navigate('Set Allergies')}>
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
