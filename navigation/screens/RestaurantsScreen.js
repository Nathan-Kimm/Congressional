import * as React from 'react';
import { View, Text } from 'react-native';

export default function RestaurantsScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      onPress = {() => navigation.navigate('')}
      style = {{fontSize: 26, fontWeight: 'bold'}}>Restaurants!</Text>
    </View>
  );
};