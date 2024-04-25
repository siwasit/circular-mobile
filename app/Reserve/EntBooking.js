import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const EntBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.font, styles.mainText]}>Entertainment Room🎸</Text>
        <Text style={[styles.font, styles.miniText]}>จองห้องดนตรี</Text>
      </View>
      <ScrollView style={styles.wrapper}>
        <View style={styles.content}>
          <Card imageSource={require('../img/ent/karaoke.webp')} title="Melody Sphere Zone Karaoke" numRooms="5" />
          <Card imageSource={require('../img/ent/musicBand.png')} title="Melody Sphere Zone Music Room" numRooms="5" />
        </View>
      </ScrollView>
    </View>
  );
}

const Card = ({ imageSource, title, numRooms }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.caption}>
      <Text style={[styles.font, styles.topPic]}>{title}</Text>
      <View style={styles.detail}>
        <Text style={styles.font}>คอร์ท/ห้องทั้งหมด</Text>
        <Text style={styles.font}> {numRooms} คอร์ท/ห้อง</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  font: {
    fontFamily: 'Imprima',
  },
  header: {
    paddingTop: 42,
    paddingLeft: 25,
  },
  mainText: {
    color: '#C3002F',
    fontSize: 40,
  },
  miniText: {
    color: 'black',
    fontSize: 30,
  },
  wrapper: {
    flex: 1,
    paddingBottom: 100,
    marginHorizontal: 10,
  },
  content: {
    marginTop: 60,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    marginTop: 10,
    padding: 10,
  },
  topPic: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  detail: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EntBooking
