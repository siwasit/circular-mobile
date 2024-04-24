import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCard from './app/Card/HomeCard';

export default function App() {
  return (
    <HomeCard />
  );
}