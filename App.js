import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCard from './app/Card/HomeCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Enroll from './app/Study/Enroll';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.navigator>
        <Stack.Screen
          name="Home"
          component={HomeCard}
        />
          <Stack.Screen name='Enroll' component={Enroll} />
      </Stack.navigator>
    </NavigationContainer>
  );
}