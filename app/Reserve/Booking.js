import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import useSessionData from '../../useSessionData';

const Booking = ({ navigation }) => {

  const { sessionId, user } = useSessionData();
  const [bookroooms, setBookroooms] = useState([]);
  const studentId = user['studentId'].toString();

  useEffect(() => {
    bookrooomsFetchData();
  }, [studentId]);

  const bookrooomsFetchData = async () => {
    try {
      const bookrooomsResponse = await fetch(`http://localhost:3000/room-booking/roomBooking/${studentId}`);

      if (!bookrooomsResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const bookrooomsResponseData = await bookrooomsResponse.json();
      console.log('Fetched data success:', bookrooomsResponseData);
      setBookroooms(bookrooomsResponseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onDelete = async (roomBookingID) => {
    try {
      const response = await fetch(`http://localhost:3000/room-booking/cancelRoomBooking/${roomBookingID}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data deleted successfully:', data.message);
      // Optionally, you can perform additional actions after deletion
      navigation.navigate('Reserve Card')
    } catch (error) {
      console.error('Error deleting data:', error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.font, styles.mainText]}>My Booking🎸</Text>
        <Text style={[styles.font, styles.miniText]}>จองห้อง</Text>
      </View>
      <ScrollView>
        {bookroooms.map((roomDetail, index) => {
          const [startTime, endTime] = roomDetail['duration'].split(' - ');

          return (
            <View style={styles.card} key={index}>
              {/* Add key prop to the parent View */}
              <View style={styles.confirm}>
                <Text style={styles.confirmText}>Open Confirm</Text>
              </View>
              <View style={styles.top}>
                <Image source={require('../img/Co-Learing.jpeg')} style={styles.image} />
                <View style={styles.detail}>
                  <Text style={styles.room}>{roomDetail['name']}</Text> {/* Use roomDetail.room instead of room */}
                  <Text style={styles.at}>{roomDetail['location']}</Text> {/* Use roomDetail.location instead of location */}
                </View>
              </View>
              <View style={styles.date}>
                <View style={styles.tab}>
                  <Text style={styles.dateText}>Start Time</Text>
                  <Text style={[styles.time, styles.startTime]}>{startTime}</Text> {/* Use roomDetail.startDate instead of startDate */}
                </View>
                <View style={styles.tab}>
                  <Text style={styles.dateText}>Due Time</Text>
                  <Text style={[styles.time, styles.endTime]}>{endTime}</Text> {/* Use roomDetail.endDate instead of endDate */}
                </View>
              </View>
              <Text style={styles.detailText}>Thammasat University Library offers group study rooms to all TU community members for study, work, and research. Individual and group study rooms.</Text>
              <View style={styles.user}>
                <View style={styles.tab}>
                  <Text style={styles.topText}>Terms of Service</Text>
                  <Text style={styles.userText}>View</Text>
                </View>
                <View style={styles.tab}>
                  <Text style={styles.topText}>User</Text>
                  <Text style={styles.userText}>{roomDetail['eng_name']}</Text> {/* Use roomDetail.user instead of user */}
                </View>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={() => onDelete(roomDetail['RBooking_id'])}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  card: {
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginHorizontal: 20,
    marginVertical: 25,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  confirm: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#dffbff',
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  confirmText: {
    fontSize: 12,
    color: '#0aadd2',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 380,
    height: 85,
    marginTop: -20,
  },
  detail: {
    marginLeft: 10,
  },
  room: {
    fontSize: 18,
    fontFamily: 'Ubuntu',
    fontWeight: '500',
  },
  at: {
    fontSize: 12,
    fontWeight: '200',
  },
  date: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    marginRight: '10%',
  },
  dateText: {
    fontSize: 15,
    fontWeight: '900',
  },
  time: {
    fontSize: 12,
    padding: 5,
    borderRadius: 10,
  },
  startTime: {
    backgroundColor: '#dffbff',
    color: '#0aadd2',
  },
  endTime: {
    backgroundColor: '#fde1e8',
    color: '#d8096a',
  },
  detailText: {
    marginTop: 10,
    fontSize: 10,
  },
  user: {
    flexDirection: 'row',
    marginTop: 10,
  },
  topText: {
    fontWeight: '900',
  },
  userText: {
    fontSize: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fde1e8',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fde1e8',
    borderWidth: 1,
    borderColor: '#d8096a',
    padding: 5,
    borderRadius: 5,
  },
  cancelText: {
    fontSize: 12,
    color: '#d8096a',
  },
});

export default Booking

