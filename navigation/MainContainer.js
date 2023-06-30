import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import GoalScreen from './screens/GoalScreen'
import NutritionScreen from './screens/NutritionScreen'
import FitnessScreen from './screens/FitnessScreen'
import ProfileScreen from './screens/ProfileScreen'

//Screen names
const homeName = 'Home';
const goalName = 'Goals';
const nutritionName = 'Nutrition';
const fitnessName = 'Fitness';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName = {homeName}
      screenOptions ={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            let rn = route.name;

            if(rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if(rn === goalName){
              iconName = focused ? 'list' : 'list-outline'
            } else if(rn === nutritionName){
              iconName = focused ? 'nutrition' : 'nutrition-outline'
            } else if(rn === fitnessName){
              iconName = focused ? 'barbell' : 'barbell-outline'
            } else if(rn === profileName){
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }

            return <Ionicons name = {iconName} size = {size} color ={color}/>
          },
      })}
      
      tabBarOptions = {{
        activeTintColor: '#004B8D',
     }}
      >



        <Tab.Screen name = {homeName} component={HomeScreen}/>
        <Tab.Screen name = {nutritionName} component = {NutritionScreen}/>
        <Tab.Screen name = {fitnessName} component = {FitnessScreen}/>
        <Tab.Screen name = {goalName} component = {GoalScreen}/>
        <Tab.Screen name = {profileName} component = {ProfileScreen}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}