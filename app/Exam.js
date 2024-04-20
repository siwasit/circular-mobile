import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';

const Exam = () => {
  const [btnPosition, setBtnPosition] = useState('Chosen');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleOption = (option) => {
    setBtnPosition(option);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.enrollContainer}>
          <TouchableOpacity onPress={openModal}>
            <Text style={styles.openButton}>Open Modal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.enrollContainer}>
                <View style={styles.enrollDiv}>
                  <Text style={styles.enrollText}>Exam</Text>
                </View>
                <View style={styles.detailDiv}>
                  <Text style={styles.detailText}>ตารางสอบ🔥</Text>
                </View>
                <View style={styles.profileGrid}>
                  <Image source={{ uri: '<path-to-image>' }} style={styles.profileImage} />
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileText}>6510742072</Text>
                    <Text style={styles.profileTextName}>Nutpraphut Praphutsirikul</Text>
                  </View>
                </View>
                <View style={styles.lastModifyDiv}>
                  <Text style={styles.lastModifyText}>อัพเดทล่าสุด: ปปปป/ดด/วว ชช:นน</Text>
                </View>
                <View style={styles.selectContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => toggleOption('Chosen')} style={[styles.toggleBtn, btnPosition === 'Chosen' ? styles.selectedBtn : null]}>
                      <Text style={btnPosition === 'Chosen' ? styles.selectedText : null}>Chosen Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleOption('Drawn')} style={[styles.toggleBtn, btnPosition === 'Drawn' ? styles.selectedBtn : null]}>
                      <Text style={btnPosition === 'Drawn' ? styles.selectedText : null}>Drawn Schedule</Text>
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
                      <Text style={styles.timeStartText}>12:00</Text>
                      <Text style={styles.timeFinishText}>14:00</Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={styles.classDetail}>
                      <Text style={styles.classTextName}>SF222 (760001)</Text>
                      <Text style={styles.classTextSubject}>Software Engineering Models and Analysis</Text>
                      <Text style={styles.classTextRoom}>Room not specified</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  openButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87c4ff',
    borderRadius: 20,
    marginTop: '50%',
    padding: 10,
  },
  enrollDiv: {
    marginTop: '10%',
    alignItems: 'left',
  },
  enrollText: {
    color: '#C3002F',
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'Poppins',
    textAlign: 'left',
    alignItems: 'left',
    marginLeft: 20,
  },
  detailDiv: {
    alignItems: 'left',
    transform: [{ translateX: -26.3 }],
  },
  detailText: {
    fontSize: 30,
    fontFamily: 'Imprima',
    marginLeft: 45,
  },
  profileGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 55,
  },
  profileImage: {
    width: 48.335,
    height: 48.392,
    borderRadius: 48.392,
    marginRight: 45,
    marginLeft: 50,
    backgroundColor: 'lightgrey',
  },
  profileInfo: {
    flex: 1,
  },
  profileText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    marginLeft: -25,
  },
  profileTextName: {
    fontFamily: 'Poppins',
    fontSize: 16,
    marginTop: 5,
    marginLeft: -25,
  },
  lastModifyDiv: {
    marginLeft: 20,
    marginTop: 10,
  },
  lastModifyText: {
    fontFamily: 'Poppins',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
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
    backgroundColor: '#ffdfae',
    borderRadius: 20,
  },
  calendarPic: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  calendarImage: {
    width: 300,
    height: 200,
    marginTop: 10,
    paddingTop: 10,
  },
  dayDiv: {
    marginLeft: 20,
    marginTop: 10,
  },
  dayText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    marginTop: 6,
  },
  classContainer: {
    width: 326,
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
    marginLeft: 10,
  },
  timeStartText: {
    fontFamily: 'Poppins',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeFinishText: {
    fontFamily: 'Poppins',
    marginTop: 5,
    fontSize: 13,
  },
  borderLine: {
    backgroundColor: 'rgba(255, 209, 47, 1)',
    height: 105,
    marginTop: 10,
    marginLeft: 5,
    paddingLeft: 2,
  },
  classDetail: {
    marginLeft: 7,
    width: 250,
  },
  classTextName: {
    fontFamily: 'Poppins',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  classTextSubject: {
    fontFamily: 'Poppins',
    marginTop: 5,
  },
  classTextRoom: {
    fontFamily: 'Poppins',
    marginTop: 15,
    fontSize: 12.5,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 'auto',
  },
  modalContent: {
    width: 365,
    height: 800,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 5,
    padding: 2,
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 15,
    color: '#333',
  },
});

export default Exam;
