import * as React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function fetchAPI() {
  axios.get('http://localhost:5000/hello')
    .then(response => console.log(response.data))
}

class App extends React.Component {
  componentDidMount() {
    fetchAPI();
  }

  render() {
    return (
      "test"
    );
  }
}

export default function ScanScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      onPress = {() => navigation.navigate('Home')}
      style = {{fontSize: 26, fontWeight: 'bold'}}>Fitness!</Text>
    </View>
  );
};