import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native'

const HomeCard = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View style={styles.coursesBox}>
                    <TouchableOpacity 
                        style={styles.coursesItem} 
                        onPress={() => navigation.navigate('EnrollCard')}
                        >
                        <Image source={require('../img/enroll.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#fffbda' }]} />
                        <Text style={styles.itemTitle}>Study</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem} onPress={() => navigation.navigate('HealthCard')}>
                        <Image source={require('../img/health.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#ffcdea' }]} />
                        <Text style={styles.itemTitle}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem}>
                        <Image source={require('../img/exam.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#dff5ff' }]} />
                        <Text style={styles.itemTitle}>Reservation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem} onPress={navigation.navigate('LibraryCard')}>
                        <Image source={require('../img/library.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#fae7f3' }]} />
                        <Text style={styles.itemTitle}>Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem} onPress={navigation.navigate('DormCard')}>
                        <Image source={require('../img/dorm.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#ffe7e1' }]} />
                        <Text style={styles.itemTitle}>Dormitory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem} onPress={navigation.navigate('ComplainCard')}>
                        <Image source={require('../img/party.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#f1eaff' }]} />
                        <Text style={styles.itemTitle}>Complain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem}>
                        <Image source={require('../img/car.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#fae7f3' }]} />
                        <Text style={styles.itemTitle}>Transportation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: '100%',
    },
    coursesBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 50,
        justifyContent: 'center',
        marginBottom: 20,
    },
    coursesItem: {
        width: '65%',
        marginHorizontal: 15,
        marginBottom: 30,
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: '#f3f3f3',
        borderColor: '#000',
    },
    itemImage: {
        overflow: 'hidden',
        width: '70%',
        height: '70%',
        position: 'absolute',
        marginLeft: 140,
        marginTop: 50,
        zIndex: 4,
    },
    itemBackground: {
        height: 128,
        width: 128,
        borderRadius: 64,
        position: 'absolute',
        top: -75,
        right: -75,
        zIndex: 1,
        transform: [{ scale: 100 }],
    },
    itemTitle: {
        minHeight: 87,
        marginBottom: 25,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        zIndex: 5,
        position: 'relative',
    },
});

export default HomeCard;
