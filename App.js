import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home.js';
import Login from './app/Login.js';
import Enroll from './app/Enroll.js';
import Exam from './app/Exam.js'
import HomeCard from './app/HomeCard.js';
import BookBooking from './app/BookBooking.js';
import ComplainForm from './app/ComplainForm.js';
import MentalHealth from './app/MentalHealth.js';
import BodyHealth from './app/BodyHealth.js';
import ComplainStatus from './app/ComplainStatus.js';
import MyBooking from './app/MyBooking.js';

const Stack = createStackNavigator();

export default function App() {
  return (
   <Enroll />
  );
}
