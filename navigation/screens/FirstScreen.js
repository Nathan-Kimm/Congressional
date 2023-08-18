import * as React from 'react';
import { View, Text, Button } from 'react-native';
import userData from '../Data';

export default function FirstScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      style = {{fontSize: 26, fontWeight: 'bold'}}>Welcome to Grass!</Text>
      <Button
        title = "Click Here to Create Your Profile"
        onPress = {() => navigation.navigate('SecondScreen')}
        />
    </View>
  );
};

// function SecondScreen({navigation}){
//     const [ name, setName ] = React.useState(null);
//     const [ age, setAge ] = React.useState(null);
//     const [ weight, setWeight ] = React.useState(null);
  
//     return(
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style = {{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>Account Setup</Text>
//         <Text style = {styles.text}>Name: </Text>
//         <TextInput style = {styles.textInput} value = {name} onChangeText = {setName} placeholder = "name" />
//         <Text style = {styles.text}>Age: </Text>
//         <TextInput style = {styles.textInput} value = {age} onChangeText = {setAge} placeholder = "age" keyboardType = "numeric" />
//         <Text style = {styles.text}>Weight: </Text>
//         <TextInput style = {styles.textInput} value = {weight} onChangeText = {setWeight} placeholder = "lbs" />
//         <Button title = "Continue" style = {styles.button} onPress = {() => navigation.navigate('SecondScreen')} />
//       </View>
//     );
//   };

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
