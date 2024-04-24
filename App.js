import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './app/ProfileScreen.js';
import EnrollCard from './app/Card/EnrollCard.js';

export default function App() {
  return (
      <EnrollCard />
  );
}