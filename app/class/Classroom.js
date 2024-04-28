import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const courses = [
    { id: 1, name: 'CN311', title: 'OPERATING SYSEMS', section: 'SECTION 760001', color: '#F37500' },
    { id: 2, name: 'CN321', title: 'DATA COMMU.', section: 'SECTION 760001', color: '#d4019f' },
    { id: 3, name: 'JP171', title: 'JAPANESE FOR BEGINNER', section: 'SECTION 760001', color: '#d4019f' },
];

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.titleText}>CLASS</Text>
            <Text style={styles.dateText}>Semester 2/2566</Text>
        </View>
    );
};

const CourseBox = ({ course }) => {
    const { name, title, section, color } = course;

    return (
        <View style={[styles.box, { borderLeftColor: color }]}>
            <View style={styles.topBox} />
            <View style={styles.mainBox}>
                <Text style={styles.courseName}>{name}</Text>
                <Text style={styles.courseTitle}>{title}</Text>
                <Text style={styles.courseSection}>{section}</Text>
            </View>
        </View>
    );
};

const Classroom = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    {courses.map((course) => (
                        <CourseBox key={course.id} course={course} />
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

export default Classroom;