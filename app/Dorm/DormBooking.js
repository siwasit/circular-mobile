import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ServiceScreen from './ServiceScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DormBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />

      <View style={styles.header}>
        <Text style={styles.headerText}>หอพัก</Text>
        <Text style={styles.subHeaderText}>ที่จองไว้</Text>
      </View>

      <View style={styles.tabMenu}>
        <TouchableOpacity title="บริการ" onPress={() => {}} style={styles.serviceButton} />
        <TouchableOpacity title="หอพัก" onPress={() => {}} style={styles.dormButton} />
      </View>

      <View style={styles.content}>
        <ServiceScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBar: {
    height: 10,
    backgroundColor: '#C3002F',
    opacity: 0.3,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 40,
    color: '#C3002F',
    fontFamily: 'Imprima', // Assuming you have Imprima font installed
  },
  subHeaderText: {
    fontSize: 30,
    color: 'black',
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 50,
    margin: 5,
    height: 40,
  },
  serviceButton: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 50,
  },
  dormButton: {
    backgroundColor: '#FFDFAE',
    borderRadius: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentImage: {
    width: '100%',
    resizeMode: 'contain',
  },
});

export default DormBooking;