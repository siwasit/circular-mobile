import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BodyHealth = () => {
    return (
        <View style={styles.container}>
            <View style={styles.block}></View>
            <View style={styles.block}></View>

            <Text style={styles.mainText}>Body Health❤️</Text>
            <Text style={styles.miniText}>แจ้งฉุกเฉิน</Text>

            <View style={styles.tabMenu}>
                <View style={styles.tab}>
                    <TouchableOpacity>
                        <Text style={[styles.button, styles.bodyHealth]}>Body-Health</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tab}>
                    <TouchableOpacity>
                        <Text style={[styles.button, styles.emergency]}>Emergency</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.emergencyButton}>
                <TouchableOpacity>
                    <Text style={styles.emergencyText}>Emergency Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    block: {
        width: 365,
        height: 10,
        backgroundColor: '#C3002F',
        opacity: 0.3,
        position: 'fixed',
    },
    mainText: {
        color: '#C3002F',
        fontSize: 40,
        paddingLeft: 25,
        paddingTop: 42,
        margin: 0,
        fontFamily: 'Imprima',
    },
    miniText: {
        color: 'black',
        fontSize: 30,
        paddingLeft: 25,
        margin: 0,
        fontFamily: 'Imprima',
    },
    tabMenu: {
        flexDirection: 'row',
        width: 317,
        marginLeft: 13,
        marginTop: 11,
        borderRadius: 50,
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: 130,
        height: 26,
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 13,
        fontFamily: 'Imprima',
    },
    bodyHealth: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    emergency: {
        backgroundColor: '#FFDFAE',
    },
    emergencyButton: {
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 50,
    },
    emergencyText: {
        marginTop: 28,
        borderRadius: 50,
        backgroundColor: '#F00',
        width: 300,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Imprima',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
    },
});

export default BodyHealth;
