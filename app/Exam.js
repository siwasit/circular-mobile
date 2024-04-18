import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Exam = () => {
  const [btnPosition, setBtnPosition] = useState(20);

  const leftClick = () => {
    setBtnPosition(0);
  }

  const rightClick = () => {
    setBtnPosition(135);
  }

  return (
    <View style={styles.container}>
      <View style={styles.enrollContainer}>
        <View style={styles.enrollDiv}>
          <Text style={styles.enrollText}>Exam</Text>
        </View>
        <View style={styles.detailDiv}>
          <Text style={styles.detailText}>ตารางสอบ</Text>
        </View>
        <View style={styles.profileGrid}>
          <Image source={{ uri: '<path-to-image>' }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileText}>6510742072</Text>
            <Text style={styles.profileText}>Nutpraphut Praphutsirikul</Text>
          </View>
        </View>
        <View style={styles.lastModifyDiv}>
          <Text style={styles.lastModifyText}>อัพเดทล่าสุด: ปปปป/ดด/วว ชช:นน</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={[styles.buttonBox, { left: btnPosition }]}>
            <TouchableOpacity onPress={leftClick} style={styles.toggleBtn}>
              <Text>Chosen Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={rightClick} style={styles.toggleBtn}>
              <Text>Drawn Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.calendarPic}>
          <Image source={require('./img/calendar.png')} style={styles.calendarImage} />
        </View>
        <View style={styles.dayDiv}>
          <Text style={styles.dayText}>25 Sunday</Text>
        </View>
        <View style={styles.classContainer}>
          <View style={styles.gridRow}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>12:00</Text>
              <Text style={styles.timeText}>14:00</Text>
            </View>
            <View style={styles.borderLine}></View>
            <View style={styles.classDetail}>
              <Text style={styles.classText}>SF222 (760001)</Text>
              <Text style={styles.classText}>Software Engineering Models and Analysis</Text>
              <Text style={styles.classText}>Room not specified</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  enrollContainer: {
    width: 364.533,
    height: 692,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    marginTop: 10,
  },
  enrollDiv: {
    marginTop: '10%',
    alignItems: 'center',
  },
  enrollText: {
    color: '#C3002F',
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  detailDiv: {
    alignItems: 'center',
    transform: [{ translateX: -26.3 }],
  },
  detailText: {
    fontSize: 30,
    fontFamily: 'Imprima',
  },
  profileGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 55,
  },
  profileImage: {
    width: 48.335,
    height: 48.392,
    borderRadius: 48.392,
    marginRight: 45,
  },
  profileInfo: {
    flex: 1,
  },
  profileText: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  lastModifyDiv: {
    marginLeft: 20,
  },
  lastModifyText: {
    fontFamily: 'Poppins',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonBox: {
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 6.5,
    marginRight: 5,
  },
  calendarPic: {
    alignItems: 'center',
    marginTop: 10,
  },
  calendarImage: {
    width: 303,
    height: 200,
    borderRadius: 10,
  },
  dayDiv: {
    marginLeft: 20,
  },
  dayText: {
    fontFamily: 'Poppins',
    marginTop: 6,
  },
  classContainer: {
    width: 303,
    height: 120,
    backgroundColor: 'rgb(249, 246, 246)',
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  gridRow: {
    flexDirection: 'row',
  },
  timeContainer: {
    marginLeft: 15,
  },
  timeText: {
    fontFamily: 'Poppins',
    marginTop: 10,
  },
  borderLine: {
    backgroundColor: 'rgba(255, 209, 47, 1)',
    height: 105,
    marginTop: 10,
    marginLeft: 4,
    paddingLeft: 3,
  },
  classDetail: {
    marginLeft: 7,
  },
  classText: {
    fontFamily: 'Poppins',
    marginTop: 10,
  },
});

export default Exam;
