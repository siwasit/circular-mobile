import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const RoomBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainText}>Study Room 🛌</Text>
        <Text style={styles.miniText}>จองห้องติว</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {/* Sample card */}
          {/* You can map your data and create cards dynamically */}
          <View style={styles.card}>
            <View style={styles.top}>
              <Image source={require('../img/dorm1.png')} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.roomName}>Study Room 1</Text>
                <View style={styles.at}>
                  {/* Location details */}
                  {/* You can dynamically render these based on data */}
                </View>
                <View style={styles.period}>
                  {/* Period buttons */}
                  {/* You can dynamically render these based on data */}
                </View>
              </View>
            </View>
            <View style={styles.down}>
              <View style={styles.content}>
                {/* Room features */}
                {/* You can dynamically render these based on data */}
              </View>
            </View>
          </View>
          {/* End of Sample card */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 42,
  },
  mainText: {
    color: '#C3002F',
    fontSize: 40,
  },
  miniText: {
    color: 'black',
    fontSize: 30,
  },
  scrollContainer: {
    paddingTop: 20,
    paddingHorizontal: 8,
  },
  cardContainer: {
    marginBottom: 100, // Adjust this value based on your content
  },
  card: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  top: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    alignSelf: 'center',
  },
  content: {
    paddingHorizontal: 2,
  },
  roomName: {
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 2,
  },
  at: {
    flexDirection: 'row',
  },
  period: {
    flexDirection: 'row',
  },
  down: {
    marginTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: '#888888',
    paddingTop: 8,
  },
});

export default RoomBooking;
