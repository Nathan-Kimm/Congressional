// Import necessary dependencies and components
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Calendar, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

// Screens
import HomeScreen from './screens/HomeScreen';
import GoalScreen from './screens/GoalScreen';
import NutritionScreen from './screens/NutritionScreen';
import FitnessScreen from './screens/FitnessScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const goalName = 'Goals';
const nutritionName = 'Nutrition';
const fitnessName = 'Fitness';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom header title component
function LogoTitle({}) {
  return (
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
  );
}

// Configure the calendar date format
LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'en';

export default function MainContainer() {
  // Create a reference for the bottom sheet and a state variable for the selected date
  const bottomSheetRef = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedDateFormated, setSelectedDateFormated] = React.useState(null);

  // Create a state variable for the events
  const [events, setEvents] = React.useState({
    '7/1/2023': [{ name: 'Rohan eats', time: '10:00 AM' }],
    '7/2/2023': [{ name: '2 pounds', time: '2:00 PM' }],
    '7/3/2023': [{ name: 'of rice', time: '4:00 PM' }],
  });

  // Function to open the bottom sheet
  const toggleBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  // Function to handle the selection of a day on the calendar
  const handleDayPress = (day) => {
    let date = day.dateString;
    let date_change = "";
    //2023-07-01
    if(date.charAt(5) == "0")
      date_change += date.substring(6, 7) + "/";
    else
      date_change += date.substring(5, 7) + "/";
    if(date.charAt(8) == "0")
      date_change += date.substring(9) + "/";
    else
      date_change += date.substring(8) + "/";
    date_change += date.substring(0, 4);
    setSelectedDate(date);
    setSelectedDateFormated(date_change);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            // Determine the appropriate icon name based on the current route
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === goalName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === nutritionName) {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
            } else if (rn === fitnessName) {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // Render the Ionicons component with the appropriate icon name
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#004B8D',
        }}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <TouchableOpacity onPress={toggleBottomSheet}>
                <Ionicons name="calendar-outline" size={24} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen name={nutritionName} component={NutritionScreen} />
        <Tab.Screen name={fitnessName} component={FitnessScreen} />
        <Tab.Screen name={goalName} component={GoalScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown
        closeOnPressMask
        animationType="slide"
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: '90%', // Adjust the height as desired
          },
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* Calendar component */}
            <Agenda
              selected = {selectedDate}
              items = {events}
              renderItem = {(item) => (
                <View style = {{ padding: 20}}>
                  <Text style = {{ fontSize: 16}}> {item.name}</Text>
                  <Text style = {{ fontSize: 14}}> {item.name}</Text>
                </View>
              )}

              renderEmptyDate ={() => (
                <Text style = {{ fontSize: 16}}></Text>
              )}

              onDayPress = {handleDayPress}
              theme = {{
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
                textDayHeaderTextColor: '#779ECB',
                // monthTextColor: '',
                // todayTextColor: '#004B8D',
                // textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
              }}
            />
          </View>
          {selectedDate && (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Events for {selectedDateFormated}:</Text>
              {events[selectedDate] ? (
                events[selectedDate].map((event, index) => (
                  <View key={index} style={{ padding: 20 }}>
                    <Text style={{ fontSize: 16 }}>{event.name}</Text>
                    <Text style={{ fontSize: 14 }}>{event.time}</Text>
                  </View>
                ))
              ) : (
                <Text style={{ fontSize: 16 }}>No events for this date</Text>
              )}
            </View>
          )}
          <TouchableOpacity
            style = {{
              position: 'absolute',
              bottom: 20,
              right: 20,
              backgroundColor: '#004B8D',
              borderRadius: 25,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}

            onPress = {() => {
              //choose what to do here
            }}
          >
            <Text style = {{ color: 'white', fontSize: 24}}> + </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </NavigationContainer>
  );
}
