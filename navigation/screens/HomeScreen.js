import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      onPress ={() => alert('This is the "Home" Screen.')}
      style = {{fontSize: 26, fontWeight: 'bold'}}>Home!</Text>
    </View>
  );
};