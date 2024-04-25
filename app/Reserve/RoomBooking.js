import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RoomBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.font, styles.mainText]}>Study Room 🛌</Text>
        <Text style={[styles.font, styles.miniText]}>จองห้องติว</Text>
      </View>
      <View style={styles.nav}>
        <View style={styles.wrapper}>
          <View style={styles.tabMenu}>
            <TouchableOpacity>
              <Text style={[styles.font, styles.Rangsit]}>Rangsit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.ThaPrahanm]}>Tha Prahanm</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.Lampang]}>Lampang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabMenu}>
            <TouchableOpacity>
              <Text style={[styles.font, styles.Puey]}>Puey Ungpakorn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.SKR]}>ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.CoLearning]}>Co-Learning</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.Multimedia]}>Multimedia Lab</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.font, styles.NongyaoChaiseri]}>Nongyao Chaiseri Libary</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
            library="Puey Ungpakorn Libary"
            floor="Fl.1"
            timings={[
              { time: '09:00 - 12:00', status: 'OPEN' },
              { time: '12:00 - 15:00', status: 'NOT' },
              { time: '15:00 - 18:00', status: 'NOT' },
              { time: '18:00 - 21:00', status: 'Not' },
              { time: 'CLOSED', status: 'CLOSED' }
            ]}
            amenities={['TV Standard', 'Marker Libary of things', 'HDMI Libary of things', 'WIFI Support']}
            capacity="6-16"
          />
          {/* Add more Card components here for additional study rooms */}
        </View>
      </ScrollView>
    </View>
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
            <Image source={require(item.icon)} style={styles.icon} />
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
  nav: {
    marginTop: 20,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  tabMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Rangsit: {
    backgroundColor: '#FFDFAE',
  },
  ThaPrahanm: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  Lampang: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  Puey: {
    backgroundColor: '#ffef95',
  },
  SKR: {
    fontSize: 9,
  },
  CoLearning: {
  },
  Multimedia: {
    fontSize: 11,
  },
  NongyaoChaiseri: {
    fontSize: 11,
  },
  SeatReservation: {
    fontSize: 11,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 50,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  nameRoom: {
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 2,
  },
  at: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  period: {
    flexDirection: 'row',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#e06169',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
    borderRadius: 2,
    padding: 3,
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
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#888888',
    paddingTop: 8,
  },
  inOf: {
    flexDirection: 'row',
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
