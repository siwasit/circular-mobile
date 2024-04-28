import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ServiceScreen from './ServiceScreen';

const DormBooking = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />

            <View style={styles.header}>
                <Text style={styles.headerText}>หอพัก</Text>
                <Text style={styles.subHeaderText}>ที่จองไว้</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Dorm Booking')} style={styles.button}>
                    <Text style={styles.buttonText}>Dorm booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dorm Info')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>Service</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.content}>
                <ServiceScreen />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        fontSize: 30,
        color: 'black',
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentImage: {
        width: '100%',
        resizeMode: 'contain',
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
});

export default DormBooking