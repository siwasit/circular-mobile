import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CampusBus = () => {
  function openAppStore() {
    Linking.openURL(`https://apps.apple.com/th/app/tu-around/id1643636174`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Campus Bus 🚌</Text>
      <Text style={styles.miniText}>รถมหาวิทยาลัย</Text>
      <View style={styles.imageContainer}>
      </View>
      <TouchableOpacity onPress={openAppStore} style={styles.button}>
        <Text style={styles.buttonText}>Redirect to the destinated app:</Text>
        <Text style={styles.buttonBoldText}>TU Around</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'Imprima',
    color: '#C3002F',
    fontSize: 40,
    paddingTop: 42,
  },
  miniText: {
    fontFamily: 'Imprima',
    color: 'black',
    fontSize: 30,
  },
  imageContainer: {
    marginTop: 10,
    width: 317,
    height: 538,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#C3002F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    bottom: '50%',
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Imprima',
  },
  buttonBoldText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Imprima',
    fontWeight: 'bold',
  },
});

export default CampusBus;
