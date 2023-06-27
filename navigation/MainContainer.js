import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import GoalScreen from './screens/GoalScreen'
import ScholarshipScreen from './screens/ScholarshipScreen'
import SearchScreen from './screens/SearchScreen'
import VolunteeringScreen from './screens/VolunteeringScreen'

//Screen names
const homeName = 'Home';
const goalName = 'Goals';
const scholarshipName = 'Scholarships';
const searchName = 'Search';
const volunteeringName = 'Volunteering';

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
            } else if(rn === scholarshipName){
              iconName = focused ? 'school' : 'school-outline'
            } else if(rn === searchName){
              iconName = focused ? 'search' : 'search-outline'
            } else if(rn === volunteeringName){
              iconName = focused ? 'people-circle' : 'people-circle-outline'
            }

            return <Ionicons name = {iconName} size = {size} color ={color}/>
          },
      })}
      
      tabBarOptions = {{
        activeTintColor: '#77DD77',
     }}
      >

        

        <Tab.Screen name = {homeName} component={HomeScreen}/>
        <Tab.Screen name = {searchName} component = {SearchScreen}/>
        <Tab.Screen name = {scholarshipName} component = {ScholarshipScreen}/>
        <Tab.Screen name = {volunteeringName} component = {VolunteeringScreen}/>
        <Tab.Screen name = {goalName} component = {GoalScreen}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}