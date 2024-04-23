import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './app/SignUp.js';
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
import BookTracking from './app/BookTracking.js';
import DormBooking from './app/DormBooking.js';
import Class from './class/Class.js';


const Stack = createStackNavigator();

export default function App() {
  return (
   <HomeCard />
  );
}
