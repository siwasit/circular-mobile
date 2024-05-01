import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button, 
  ScrollView
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMarker, faTv, faLaptop, faWifi } from '@fortawesome/free-solid-svg-icons';

const RoomBooking = () => {
  const [campus, setCampus] = useState('Rangsit');
  const [location, setLocation] = useState('Puey Ungpakorn Libary');

  const rooms = [
    {
      id: 1,
      image: require('../img/dorm1.png'), 
      name: 'Study Room 1',
      campus: 'Rangsit Campus',
      location: 'Puey Ungpakorn Libary',
      floor: 'Fl.1',
      features: [
        { icon: faTv, text: 'TV (Standard)' },
        { icon: faMarker, text: 'Marker (Libary of things)' },
        { icon: faLaptop, text: 'HDMI (Libary of things)' },
        { icon: faWifi, text: 'WIFI (Support)' },
      ],
      capacity: '6-16',
      timeSlots: [
        { time: '09:00 - 12:00', status: 'OPEN' },
        { time: '12:00 - 15:00', status: 'NOT' },
        { time: '15:00 - 18:00', status: 'NOT' },
        { time: '18:00 - 21:00', status: 'NOT' },
        { time: 'CLOSED', status: 'CLOSED' },
      ],
    },
    
    // Add more room data here
  ];

  const handleCampusChange = (newCampus) => setCampus(newCampus);
  const handleLocationChange = (newLocation) => setLocation(newLocation);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerMain}>Study Room </Text>
          <Text style={styles.headerMini}>จองห้องติว</Text>
        </View>

        <View style={styles.nav}>
          <View style={styles.navCampus}>
            <Button title="Rangsit Campus" onPress={() => handleCampusChange('Rangsit')} style={styles.navCard}/>
            <Button title="Tha Prahanm Campus" onPress={() => handleCampusChange('Tha Prahanm')} style={styles.navCard} />
            <Button title="Lampang Campus" onPress={() => handleCampusChange('Lampang')} style={styles.navCard} />
          </View>
          <View style={styles.navLocation}>
            <Button title="Puey Ungpakorn" onPress={() => setLocation('Puey Ungpakorn')} />
            {/* Add more location buttons here */}
          </View>
        </View>

        <View style={styles.main}>
          <ScrollView style={styles.cardWrapper}>
            {rooms.map((room) => (
              <View key={room.id} style={styles.card}>
                <View style={styles.cardTop}>
                  <Image source={room.image} style={styles.cardImage} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardName}>{room.name}</Text>
                    <View style={styles.cardDetails}>
                      <View style={styles.cardDetail}>
                        <FontAwesomeIcon icon={faMarker} style={styles.cardDetailIcon} />
                        <Text style={styles.cardDetailText}>{room.campus}</Text>
                      </View>
                      <View style={styles.cardDetail}>
                        <FontAwesomeIcon icon={faTv} style={styles.cardDetailIcon} />
                        <Text style={styles.cardDetailText}>{room.location}</Text>
                      </View>
                      <View style={styles.cardDetail}>
                        <FontAwesomeIcon icon={faWifi} style={styles.cardDetailIcon} />
                        <Text style={styles.cardDetailText}>{room.floor}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardBottom}>
                  <View style={styles.cardFeatures}>
                    {room.features.map((feature) => (
                      <View key={feature.text} style={styles.cardFeature}>
                        <FontAwesomeIcon icon={feature.icon} style={styles.cardFeatureIcon} />
                        <Text style={styles.cardFeatureText}>{feature.text}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.cardCapacity}>
                    <Text style={styles.cardCapacityText}>Capacity: {room.capacity}</Text>
                  </View>
                  <View style={styles.cardTimeslots}>
                    {room.timeSlots.map((slot) => (
                      <View key={slot.time} style={styles.cardTimeslot}>
                        <Text style={slot.status === 'OPEN' ? styles.cardTimeslotOpen : styles.cardTimeslotClosed}>{slot.time}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Circular &copy; 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
  },
  header: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray border
  },
  headerMain: {
    color: '#C3002F',
    fontSize: 40,
  },
  headerMini: {
    color: 'black',
    fontSize: 30,
  },
  nav: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navCampus: {
    flexDirection: 'row',
    fontSize: 10,
  },
  navLocation: {
    marginTop: 10,
  },
  navButton: {
    flex: 1,
    margin: 5,
  },
  navCard: {
    borderRadius: 20,
    width: 40,
    
  },
  navButtonActive: {
    backgroundColor: '#ddd', 
  },
  main: {
    flex: 1,
    padding: 10,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff', // White background for card
    borderRadius: 5,
    shadowColor: '#ddd', // Light gray shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1, // Add some elevation for card
    marginBottom: 10,
  },
  cardTop: {
    flexDirection: 'row',
    padding: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDetails: {
    flexDirection: 'column',
    marginTop: 5,
    flexWrap: 'wrap',
  },
  cardDetail: {
    marginRight: 10,
    flexDirection: 'row',
    marginTop: 5,
  },
  cardDetailIcon: {
    fontSize: 16,
    color: '#aaa', // Light gray icon color
  },
  cardDetailText: {
    marginLeft: 5,
  },
  cardBottom: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Light gray border
  },
  cardFeatures: {
    marginBottom: 5,
  },
  cardFeature: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  cardFeatureIcon: {
    fontSize: 14,
    color: '#aaa', // Light gray icon color
    marginRight: 5,
  },
  cardFeatureText: {
    fontSize: 14,
  },
  cardCapacity: {
    marginBottom: 5,
  },
  cardCapacityText: {
    fontSize: 14,
  },
  cardTimeslots: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow timeslots to wrap to next line
  },
  cardTimeslot: {
    marginRight: 10,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  cardTimeslotOpen: {
    backgroundColor: '#aae0ff', 
    color: '#000', 
    padding: 2,
    borderRadius: 20,
  },
  cardTimeslotClosed: {
    backgroundColor: '#ddd', // Light gray for closed slots
    color: '#888', // Light gray text
    padding: 2,
    borderRadius: 20,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#aaa', 
  },
  navButtonInactive: {
    backgroundColor: '#f5f5f5', 
  },
});

export default RoomBooking;