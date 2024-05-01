import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Carousel from 'react-native-snap-carousel';

const images = [
  require('./img/room/room1.png'),
  require('./img/room/room2.png'),
  require('./img/room/room3.png'),
];

const DormInfo = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.statusBar} />

        <View style={styles.header}>
          <Text style={styles.headerText}>หอพัก</Text>
          <Text style={styles.subHeaderText}>บริการห้องพัก</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Dorm Booking')} style={[styles.button, styles.inactiveButton]}>
            <Text style={styles.buttonText}>Dorm booking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dorm Info')} style={styles.button}>
            <Text style={styles.buttonText}>Service</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.dormCard}>
            <Card imageSource={require('./img/dorm1.png')} title="Dormitory A" dormType="A" style={styles.cardStyle} />
            <Card imageSource={require('./img/puay.png')} title="Dormitory B" dormType="B" style={styles.cardStyle} />
          </View>
        </View>

        <View style={styles.tickContainer}>
          <FontAwesomeIcon icon={faCheck} style={styles.tick} />
          <Text style={styles.tickDetail}>
            ระบบประตูอัตโนมัติ (Door Access)
          </Text>
        </View>

        <View style={styles.notifContainer}>
          <Text style={styles.notif}>หมายเหตุ:</Text>
          <Text style={styles.miniDetail}>ค่าไฟฟ้าหน่วยที่ 1-300 หน่วยละ 5 บาท</Text>
          <Text style={styles.miniDetail}>ค่าไฟฟ้าหน่วยที่ 301 ขึ้นไป หน่วยละ 5 บาท</Text>
        </View>
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity onPress={() => { }} style={styles.submitButton}>
          <Text>Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Image Sliders imported from DormImage*/}
      <View style={styles.imageSliderContainer}>
        <Carousel
          data={images}
          renderItem={({ item, index }) => <View key={index}><Image source={item} style={styles.sliderImage} /></View>}
          sliderWidth={600}
          itemWidth={600}
          itemHeight={390}
        />
      </View>
    </ScrollView>
  );
};

const Card = ({ imageSource, title, dormType }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.caption}>
      <Text style={[styles.font, styles.topPic]}>{title}</Text>
      <View style={styles.detail}>
        <Text style={styles.font}>หอพักโซน {dormType}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
  },
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
  },
  subHeaderText: {
    fontSize: 28,
    color: 'black',
    marginTop: 5,
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 50,
    margin: 5,
    height: 45,
  },
  serviceButton: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 50,
    fontWeight: 300,
  },
  dormButton: {
    backgroundColor: '#FFDFAE',
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 11,
    gap: '10%',
  },
  button: {
    borderRadius: 50,
    width: 109,
    height: 26,
    backgroundColor: '#FFDFAE',
  },
  buttonText: {
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 5,
  },
  inactiveButton: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13rem',
    height: 'auto',
    marginBottom: 10,
  },
  cardStyle: {
    marginBottom: 10,
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
  dormCard: {
    width: '80%',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 40,
  },
  tickContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
    marginTop: '10rem',
    marginLeft: 35,
  },
  tickDetail: {
    marginTop: -3.8,
  },
  notifContainer: {
    flex: 1,
    marginLeft: 35,
    marginTop: '-10rem',
  },
  notif: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  miniDetail: {
    fontSize: 13,
  },
  submitContainer: {
    marginLeft: 35,
    marginTop: '-7rem',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#a3b8ff',
    width: 94,
    textAlign: 'center',
  },
  imageSliderContainer: {
    marginBottom: 20,
    marginTop: 30,
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
});

export default DormInfo