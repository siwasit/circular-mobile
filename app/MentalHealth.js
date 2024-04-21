import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MentalHealth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}></View>
      <View style={styles.block}></View>

      <Text style={styles.mainText}>Mental Health</Text>
      <Text style={styles.miniText}>แจ้งปัญหาสุขภาพ</Text>

      <View style={styles.tabMenu}>
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.bodyHealthButton]}>
          <Text style={styles.buttonText}>Body-Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.emergencyButton]}>
          <Text style={styles.buttonText}>Emergency</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="แจงเหตุ...."
        placeholderTextColor="#9B9B9B"
      />

      <View style={styles.submit}>
        <TouchableOpacity onPress={() => {}} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>ส่งเรื่อง</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    width: 365,
    height: 10,
    backgroundColor: '#C3002F',
    opacity: 0.3,
    position: 'absolute',
    top: 0,
  },
  mainText: {
    color: '#C3002F',
    fontSize: 40,
    paddingLeft: 25,
    paddingTop: 42,
    margin: 0,
    fontFamily: 'Imprima',
  },
  miniText: {
    color: 'black',
    fontSize: 30,
    paddingLeft: 25,
    margin: 0,
    fontFamily: 'Imprima',
  },
  tabMenu: {
    flexDirection: 'row',
    width: 317,
    marginTop: 11,
    borderRadius: 50,
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  button: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 50,
    width: 160,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  bodyHealthButton: {
    backgroundColor: '#FFDFAE',
  },
  emergencyButton: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'Imprima',
  },
  input: {
    marginTop: 34,
    marginLeft: 25,
    width: 310,
    height: 375,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 10,
  },
  submit: {
    alignItems: 'center',
    marginTop: 28,
  },
  submitButton: {
    backgroundColor: '#FFDFAE',
    borderRadius: 20,
    width: 125,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 13,
    fontFamily: 'Imprima',
  },
});

export default MentalHealth;
