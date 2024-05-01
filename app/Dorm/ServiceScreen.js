import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 
import SelectButton from './SelectButton';

const IMAGES = [
  require('./img/dorm1.png'),
  require('./img/puay.png'),
  // ... more images
];

const ServiceScreen = () => {
  const [hasUpdates, setHasUpdates] = useState(true);

  const handleViewAllPress = () => {
    console.log('View All pressed');
  };

  return (
    <View style={styles.imageSliderContainer}>
      <Carousel
        data={IMAGES}
        renderItem={({ item, index }) => <View key={index}><Image source={item} style={styles.sliderImage} /></View>}
        sliderWidth={300}
        itemWidth={300}
      />
      <Text style={styles.servicesText}>Our Services</Text>
      <View style={styles.gridContainer}>
        <SelectButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageSliderContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: 200,
  },
  servicesText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 220,
    marginLeft: -190,
    paddingTop: 20,
  },
  updatesContainer: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  updatesTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  gridContainer: {
    width: '80%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'grid',
  },
  viewAllButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  viewAllText: {
    fontSize: 16,
  },
  smileIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  noUpdatesText: {
    fontSize: 16,
    color: '#aaa', // Light gray text
  },
});

export default ServiceScreen;