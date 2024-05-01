import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useSessionData from '../../useSessionData';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>CLASS</Text>
      <Text style={styles.dateText}>Semester 2/2566</Text>
    </View>
  );
};

const CourseBox = ({ course }) => {
  const { Subject_code, Subject_name, section } = course;

  return (
    <View style={styles.box}>
      <View style={styles.topBox} />
      <View style={styles.mainBox}>
        <Text style={styles.courseName}>{Subject_code}</Text>
        <Text style={styles.courseTitle}>{Subject_name}</Text>
        <Text style={styles.courseSection}>{section}</Text>
      </View>
    </View>
  );
};

const Class = () => {

  const { sessionId, user } = useSessionData();
  const studentId = user['studentId'].toString();
  const [courses, setSubject] = useState([]);

  useEffect(() => {
    subjectFetchData();
  }, [studentId]);

  const subjectFetchData = async () => {
    try {
      const subjectResponse = await fetch(`http://localhost:3000/education/getEnroll/${studentId}`);

      if (!subjectResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const subjectResponseData = await subjectResponse.json();
      console.log('Fetched data success:', subjectResponseData);
      setSubject(subjectResponseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // return (
  //   <View style={styles.container}>
  //     <ScrollView style={styles.scrollContainer}>
  //       <View style={styles.header}>
  //         <View style={styles.header1}>
  //           <Text style={styles.Day}>2 MAY 2024</Text>
  //           <Text style={styles.Main}>CLASS</Text>
  //         </View>
  //         <View style={styles.header2}>
  //           <Text style={styles.Font}>Spring 2024</Text>
  //         </View>
  //       </View>
  //       <View style={styles.conatiner}>
  //         <View>
  //           {subjects !== null && (
  //             subjects.map((subject) => (
  //               <View key={subject['Subject_code']} style={styles.box}>
  //                 <View style={styles.topbox} />
  //                 <View style={styles.mainbox}>
  //                   <Text style={styles.course}>{subject['Subject_code']}</Text>
  //                   <Text style={styles.courseName}>{subject['Subject_name']}</Text>
  //                   <Text style={styles.courseSection}>{subject['section']}</Text>
  //                 </View>
  //               </View>
  //             ))
  //           )}
  //         </View>
  //       </View>
  //     </ScrollView>
  //   </View>
  // );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {courses.map((course, index) => (
            <CourseBox key={index} course={course} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  content: {
      padding: 20,
      flex: 1,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'white',
  },
  dateText: {
      fontSize: 18,
  },
  titleText: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  box: {
      backgroundColor: '#FAFAFA',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2,
      margin: 10,
      padding: 10,
  },
  topBox: {
      height: 20,
      backgroundColor: '#333',
      borderRadius: 10,
  },
  mainBox: {
      marginTop: 10,
  },
  courseName: {
      fontSize: 40,
  },
  courseTitle: {
      fontSize: 35,
  },
  courseSection: {
      fontSize: 20,
  },
  tabBar: {
      height: 50,
      backgroundColor: '#f4f4f4',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  },
});

export default Class;