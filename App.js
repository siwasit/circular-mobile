import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeCard from './app/Card/HomeCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EnrollCard from './app/Card/EnrollCard'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <HomeCard />
        <Stack.Screen name='Home' component={HomeCard} />
        <Stack.Screen name='Enroll' component={EnrollCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}