import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ExerciseBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.font, styles.mainText]}>Exercise Room⛹️‍♀️</Text>
        <Text style={[styles.font, styles.miniText]}>จองคอร์ด</Text>
      </View>
      <ScrollView style={styles.wrapper}>
        <View style={styles.content}>
          <Card imageSource={require('../img/exercise/ALL-GYM-NO4-scaled.jpg')} title="GYM NO.4" numRooms="5" />
          <Card imageSource={require('../img/exercise/สนามมินิประกอบ2-scaled.jpg')} title="สนามมินิ" numRooms="5" />
          <Card imageSource={require('../img/exercise/เทนนิสปก-scaled.jpg')} title="เทนนิสปก" numRooms="5" />
          <Card imageSource={require('../img/exercise/ห้องฟิตเนสปก-scaled.jpg')} title="ฟิตเนส" numRooms="5" />
          <Card imageSource={require('../img/exercise/เอ็กซ์ตรีมปก-scaled.jpg')} title="เอ็กซ์ตรีม" numRooms="5" />
          <Card imageSource={require('../img/exercise/สนามแบดประกอบ1-scaled.jpg')} title="Inter สนามแบด" numRooms="5" />
          <Card imageSource={require('../img/exercise/สนามบาสปกภาพเดียว.jpg')} title="สนามบาส" numRooms="5" />
          <Card imageSource={require('../img/exercise/สควอชปก-scaled.jpg')} title="สควอชปก" numRooms="5" />
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
    marginTop: 10,
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

export default ExerciseBooking
