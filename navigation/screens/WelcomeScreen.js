import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import Data from '../Data.json';

export default function WelcomeScreen({navigation}){
  
  const [ data, setData ] = useState(Data);
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);

  function authenticateCredentials(){
    var isValid = false;
    setData(
      data.users.map(item => {
        if(item.credentials[0] === username && item.credentials[1] === password){
          isValid = true;
          return {...data, currentuser: item};
        }
    }));
    if(isValid){
      navigation.navigate('Home Navigation');
    }
  }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>Login</Text>
      <Text style = {styles.text}>Username: </Text>
      <TextInput style = {styles.textInput} value = {username} onChangeText = {setUsername} placeholder = "Username" returnKeyType="done"/>
      <Text style = {styles.text}>Password: </Text>
      <TextInput style = {styles.textInput} value = {password} onChangeText = {setPassword} placeholder = "Password" returnKeyType="done"/>
      <Pressable style = {styles.button} onPress = {authenticateCredentials}>
        <Text style = {{fontWeight: 'bold', fondSize: 26, left: 10}}>Continue</Text>
      </Pressable>
      <Pressable style = {styles.button} onPress = {() => navigation.navigate('Sign Up')}>
        <Text style = {{fontWeight: 'bold', fondSize: 26, left: 10}}>Sign Up</Text>
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
    borderWidth: 1,
    borderRadius: 5,
  },
});
