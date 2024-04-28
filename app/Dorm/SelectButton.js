import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWrench, faBroom, faEnvelopesBulk, faQrcode } from '@fortawesome/free-solid-svg-icons';

const SelectButton = () => {
    const onPressButton = (target) => {
        // Handle button press here
        // Navigate to your target pages using appropriate navigation methods
        console.log('Button pressed:', target);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressButton('Button 1')}>
                <FontAwesomeIcon icon={faWrench} style={styles.icon} />
                <Text style={styles.font}>Repair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressButton('Button 2')}>
                <FontAwesomeIcon icon={faBroom} style={styles.icon} />
                <Text style={styles.font}>Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressButton('Button 3')}>
                <FontAwesomeIcon icon={faEnvelopesBulk} style={styles.icon} />
                <Text style={styles.font}>Mailing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressButton('Button 4')}>
                <FontAwesomeIcon icon={faQrcode} style={styles.icon} />
                <Text style={styles.font}>Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        gap: 45,
        backgroundColor: 'white',
    },
    touchableOpacity: {
        transform: [{ translateY: -190 }],
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        opacity: 0.8,
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: 'lightgrey',
        height: 84,
        borderRadius: 20,
        alignItems: 'center',
        textAlign: 'center',
        width: 85,
        shadowOffset: { width: 10, height: 10 },
    },
    font: {
        fontSize: 13,
    },
    icon: {
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    }
});

export default SelectButton;