import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RoomBooking = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.font, styles.mainText]}>Study Room 🛌</Text>
        <Text style={[styles.font, styles.miniText]}>จองห้องติว</Text>
      </View>
      <View style={styles.nav}>
        <View style={styles.wrapper}>
          <View style={styles.tabMenu}>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.Rangsit]}>Rangsit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.ThaPrahanm]}>Tha Prahanm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.Lampang]}>Lampang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabMenu}>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.Puey]}>Puey Ungpakorn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.SKR]}>ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.CoLearning]}>Co-Learning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.Multimedia]}>Multimedia Lab</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.NongyaoChaiseri]}>Nongyao Chaiseri Libary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.font, styles.SeatReservation]}>จองที่นั่ง หอสมุดป๋วย</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.wrapper}>
          <Card
            imageSource={require('../img/dorm1.png')} 
            name="Study Room 1"
            location="Rangsit Campus"
            library="Puey Ungpakorn Library"
            floor="Fl.1"
            timings={[
              { time: '09:00 - 12:00', status: 'OPEN' },
              { time: '12:00 - 15:00', status: 'IDLE' },
              { time: '15:00 - 18:00', status: 'IDLE' },
              { time: '18:00 - 21:00', status: 'IDLE' },
              { time: 'CLOSED', status: 'CLOSED' },
            ]}
            amenities={[
              { icon: require('../img/svg/Frame.svg'), text: 'TV Standard' }, 
              { icon: require('../img/svg/marker.svg'), text: 'Marker Library of things' },
              { icon: require('../img/svg/cable.svg'), text: 'HDMI Library of things' },
              { icon: require('../img/svg/wifi.svg'), text: 'WIFI Support' },
            ]}
            capacity="6-16"
          />
          {/* Add more Card components here for additional study rooms */}
        </View>
      </ScrollView>
    </View>
    </ScrollView>
    
  );
}

const Card = ({ imageSource, name, location, library, floor, timings, amenities, capacity }) => (
  <View style={styles.card}>
    <View style={styles.top}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.font, styles.nameRoom]}>{name}</Text>
        <View style={styles.at}>
          <Text style={styles.font}>{location}</Text>
          <Text style={styles.font}>{library}</Text>
          <Text style={styles.font}>{floor}</Text>
        </View>
        <View style={styles.period}>
          {timings.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.button, styles[item.status.toLowerCase()]]}>
              <Text style={styles.font}>{item.time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
    <View style={styles.down}>
      <View style={styles.content}>
        {amenities.map((item, index) => (
          <View key={index} style={styles.inOf}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.font}>{item.text}</Text>
          </View>
        ))}
        <View style={styles.inOf}>
          <Text style={[styles.font, styles.num]}>{capacity}</Text>
        </View>
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
    fontWeight: '400',
    fontStyle: 'normal',
  },
  header: {},
  mainText: {
    color: '#C3002F',
    fontSize: 40,
    paddingLeft: 25,
    paddingTop: 42,
    margin: 0,
  },
  miniText: {
    color: 'black',
    fontSize: 30,
    paddingLeft: 25,
    margin: 0,
  },
  nav: {},
  wrapper: {
    marginHorizontal: 20,
  },
  tabMenu: {
    marginTop: 11,
    display: 'grid',
  },
  tab: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 10,
    width: 100,
    height: 50,
    border: 'none',
    boxShadow: '1px 1px 1px 1px #919191',
  },
  Rangsit: {
    backgroundColor: '#FFDFAE',
    color: '#C3002F',
    fontSize: 15,
  },
  ThaPrahanm: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    color: 'black',
    fontSize: 15,
  },
  Lampang: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    color: 'black',
    fontSize: 15,
  },
  Puey: {
    backgroundColor: '#ffef95',
    color: '#C3002F',
    fontSize: 12,
    boxShadow: '1px 1px 2px #888888',
  },
  SKR: {
    fontSize: 9,
  },
  CoLearning: {},
  Multimedia: {
    fontSize: 11,
  },
  NongyaoChaiseri: {
    fontSize: 11,
  },
  SeatReservation: {
    fontSize: 11,
  },
  main: {
    marginTop: 20,
    paddingBottom: 100,
  },
  cardWrapper: {
    margin: '0px 8px',
    backgroundColor: '#EAECF3',
    padding: '2px 2px',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 1,
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    height: 110,
  },
  top: {
    backgroundColor: '#ffffff',
    display: 'grid',
    gridTemplateColumns: '1fr 10fr',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 50,
    justifySelf: 'center',
  },
  content: {
    paddingLeft: 2,
    display: 'flex',
  },
  nameRoom: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  at: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 4,
  },
  period: {
    marginTop: 4,
    display: 'flex',
  },
  button: {
    backgroundColor: '#e06169',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
    borderRadius: 2,
    padding: '3px 3px',
  },
  NOT: {
    backgroundColor: '#e06169',
  },
  OPEN: {
    backgroundColor: '#45d84c',
  },
  CLOSED: {
    backgroundColor: '#bfbfbf',
  },
  down: {
    marginTop: 6,
    padding: '0px 10px',
    borderTopWidth: 0.5,
    borderTopColor: '#888888',
    paddingTop: 8,
  },
  inOf: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 10,
  },
  num: {
    color: '#d84a45',
    padding: 2.5,
    backgroundColor: '#ffdcfa',
    borderRadius: 5,
    fontSize: 8.3,
  },
});


export default RoomBooking