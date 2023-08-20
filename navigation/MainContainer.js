// Import necessary dependencies and components
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import SearchScreen from './screens/SearchScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import ProfileScreen from './screens/ProfileScreen';

import WelcomeScreen from './screens/WelcomeScreen';
import SetData from './screens/SetData';

// Screen names
const homeName = "Home";
const scanName = "Scan";
const searchName = "Search";
const restaurantsName = "Restaurants";
const profileName = 'Profile';

const welcomeName = "Welcome";
const setDataName = "Set Data";
const homeNavigationName = "Home Navigation";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeNavigaton() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            // Determine the appropriate icon name based on the current route
            if(rn === homeName)
              iconName = focused ? 'home' : 'home-outline';
            else if(rn === scanName)
              iconName = focused ? 'scan' : 'scan-outline';
            else if(rn === searchName)
              iconName = focused ? 'search' : 'search-outline';
            else if(rn === restaurantsName)
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            else if(rn === profileName)
              iconName = focused ? 'person-circle' : 'person-circle-outline';

            // Render the Ionicons component with the appropriate icon name
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#004B8D',
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={scanName} component={ScanScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={restaurantsName} component={RestaurantsScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerMode: false }} initialRouteName={welcomeName}>
        <Stack.Screen name = { welcomeName } component = { WelcomeScreen } />
        <Stack.Screen name = { setDataName } component = { SetData } />
        <Stack.Screen name = { homeNavigationName } component = { HomeNavigaton } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
