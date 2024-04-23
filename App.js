import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCard from './app/HomeCard.js';
import ProfileScreen from './app/ProfileScreen.js';

export default function App() {
  return (
      <ProfileScreen />
  );
}