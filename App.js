import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home.js';
import Login from './app/Login.js';
import Enroll from './app/Enroll.js';

const Stack = createStackNavigator();

export default function App() {
  return (
   <Home />
  );
}
