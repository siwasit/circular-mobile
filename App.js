import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import EnrollCard from './app/Card/EnrollCard';
import HealthCard from './app/Card/HealthCard';
import ProfileScreen from './app/Profiles/ProfileScreen';
import Class from './app/Class/Class.js';
import HomeCard from './app/Card/HomeCard.js'
import DormCard from './app/Card/DormCard.js';
import LibraryCard from './app/Card/LibraryCard.js';
import Enroll from './app/Study/Enroll.js'
import ComplainCard from './app/Card/ComplainCard.js';
import TransportCard from './app/Card/TransportCard.js';
import ReserveCard from './app/Card/ReserveCard.js';
import Exam from './app/Study/Exam.js'

//Screen names
const homeName = "Home";
const profilesName = "Profile";
const className = "Class";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeTab}/>
        <Stack.Screen name='EnrollCard' component={EnrollCard} />
        <Stack.Screen name='HealthCard' component={HealthCard} />
        <Stack.Screen name='LibraryCard' component={LibraryCard} />
        <Stack.Screen name='ReserveCard' component={ReserveCard} />
        <Stack.Screen name='DormCard' component={DormCard} />
        <Stack.Screen name='ComplainCard' component={ComplainCard} />
        <Stack.Screen name='TransportCard' component={TransportCard} />

        <Stack.Screen name='Enroll' component={Enroll} />
        <Stack.Screen name='Exam' component={Exam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === profilesName) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === className) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen name={homeName}>
        {() => <HomeCard navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name={className} component={Class} />
      <Tab.Screen name={profilesName} component={ProfileScreen} />

    </Tab.Navigator>
  );
}
