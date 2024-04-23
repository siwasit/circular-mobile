import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCard from './app/HomeCard.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.homeScreen}>
      <HomeCard />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
    marginTop: StatusBar.currentHeight,
  }
});