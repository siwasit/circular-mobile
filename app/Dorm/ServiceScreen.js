import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


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
        renderItem={({ item }) => <Image source={item} style={styles.sliderImage} />}
        sliderWidth={300}
        itemWidth={300}
      />
      <Text style={styles.servicesText}>Our Services</Text>
      <View style={styles.updatesContainer}>
        {hasUpdates ? (
          <>
            <Text style={styles.updatesTitle}>Today's Updates</Text>
            <TouchableOpacity onPress={handleViewAllPress} style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSmile} style={styles.smileIcon} />
            <Text style={styles.noUpdatesText}>No Updates</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageSliderContainer: {
    marginBottom: 20,
  },
  sliderImage: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  servicesText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 200,
  },
  updatesContainer: {
    alignItems: 'center',
  },
  updatesTitle: {
    fontSize: 18,
    marginBottom: 5,
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