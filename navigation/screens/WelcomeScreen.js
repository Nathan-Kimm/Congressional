import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import userData from '../Data';

export default function WelcomeScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      style = {{fontSize: 26, fontWeight: 'bold'}}>Welcome to Grass!</Text>
      <Button
        title = "Click Here to Create Your Profile"
        onPress={() => {navigation.navigate('Set Data')}}
        />
    </View>
  );
};

const styles = StyleSheet.create ({
    text: {
      fontSize: 10,
      marginTop: 10,
    },
    button: {
      borderRadius: 10,
      backgroundColor: "#4A412A",
      textAlign: 'center',
    },
    textInput: {
      width: 40,
      height: 20,
      borderRadius: 10,
    },
});
