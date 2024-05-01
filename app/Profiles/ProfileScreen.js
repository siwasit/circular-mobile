import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSessionData from '../../useSessionData';

const ProfileScreen = () => {

    const { sessionId, user } = useSessionData();
    const [firstName, lastName] = user['userName'].split(' ');
    const studentId = user['studentId'].toString();
    const [paymentData, setPaymentData] = useState(null);
    const [gpaData, setGpaData] = useState(null);
    const [creditData, setCreditData] = useState(null);

    useEffect(() => {
        paymentFetchData();
        gpaFetchData();
        creditFetchData();
    }, [user]);

    const paymentFetchData = async () => {
        try {
            const paymentResponse = await fetch(`http://localhost:3000/payment/${studentId}`);

            if (!paymentResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const paymentResponseData = await paymentResponse.json();
            // console.log('Fetched data:', responseData);
            setPaymentData(paymentResponseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const creditFetchData = async () => {
        try {
            const creditResponse = await fetch(`http://localhost:3000/education/credits/${studentId}`);

            if (!creditResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const creditResponseData = await creditResponse.json();
            // console.log('Fetched data:', responseData);
            setCreditData(creditResponseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const gpaFetchData = async () => {
        try {
            const gpaResponse = await fetch(`http://localhost:3000/education/gpa/${studentId}`);

            if (!gpaResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const gpaResponseData = await gpaResponse.json();
            // console.log('Fetched data:', gpaResponseData);
            setGpaData(gpaResponseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onLogout = async () => {
        try {
            // Clear all data in AsyncStorage
            await AsyncStorage.clear();
            // Navigate to the login page
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.profileCard}>
                    <View style={styles.top}>
                        <View style={styles.picture}>
                            <Image style={styles.pictureImage} source={require('../img/person.jpg')}/>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.name}>
                                <Text style={styles.firstName}>{firstName}</Text>
                                <Text style={styles.lastName}>{lastName}</Text>
                            </View>
                            <View style={styles.school}>
                                <Image source={require('../img/Main-Logo.png')} style={styles.schoolLogo} />
                                <View style={styles.schoolInfo}>
                                    <Text style={styles.fieldOfStudy}>{user['faculty']}</Text>
                                    <Text style={styles.schoolName}>THAMMASAT UNIVERSITY</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.detailTab}>
                                    <Text style={styles.detailNum}>{user['studentId']}</Text>
                                    <Text style={styles.detailLabel}>STUDENT ID</Text>
                                </View>
                                <View style={styles.detailTab}>
                                    {gpaData !== null && (
                                        <Text style={styles.detailNum}>{gpaData['gpa']}</Text>
                                    )}
                                    <Text style={styles.detailLabel}>G.P.A.</Text>
                                </View>
                                <View style={styles.detailTab}>
                                    {/* <Text style={styles.detailNum}>57</Text> */}
                                    {creditData !== null && (
                                        <Text style={styles.detailNum}>{creditData['total_credits']}</Text>
                                    )}
                                    <Text style={styles.detailLabel}>CREDITS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Image style={styles.bottomImage} />
                        <View style={styles.tab}>
                            <Text style={styles.professor}>ASS.PROF.DR. xxxxxxx xxxxxxx</Text>
                            <Text style={styles.schoolInfo}>THAMMASAT UNIVERSITY</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.bottomDetailTab}>
                        <Image style={styles.detailIcon} />
                        <Text style={styles.detailName}>PAYMENT LIST</Text>
                        {paymentData !== null && (
                            <View style={styles.tableContainer}>
                                {/* <Text style={styles.tableHeader}>PAYMENT LIST</Text> */}
                                <View style={styles.table}>
                                    {paymentData.map(payment => (
                                        <View key={payment['Payment_id']} style={styles.row}>
                                            <Text style={[styles.cell, styles.cellWidth]}>{payment['payment_name']}</Text>
                                            <Text style={[styles.cell, styles.cellWidth]}>{payment['description']}</Text>
                                            <Text style={[styles.cell, styles.cellWidth]}>{payment['price']}</Text>
                                            <Text style={[styles.cell, styles.cellWidth]}>{payment['by']}</Text>
                                        </View>
                                    ))}
                                </View>
                                <Image style={styles.detailArrow} />
                            </View>
                        )}
                        <Image style={styles.detailArrow} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.bottomDetailTab}>
                        <Image style={styles.detailIcon} />
                        <Text style={styles.detailName}>CALENDAR</Text>
                        <Image style={styles.detailArrow} />
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.bottomDetailTab}>
                        <Image style={styles.detailIcon} />
                        <Text style={styles.detailName}>SETTING</Text>
                        <Image style={styles.detailArrow} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.bottomDetailTab}>
                        <Image style={styles.detailIcon} />
                        {/* <Text style={styles.detailName}>SIGN OUT</Text> */}
                        <TouchableOpacity style={styles.logoutButton} onPress={() => onLogout()}>
                            <Text style={styles.logoutButtonText}>LOG OUT</Text>
                        </TouchableOpacity>
                        <Image style={styles.detailArrow} />
                    </View>
                </View>

                <Image style={styles.cardImage} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
    },
    profileCard: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 32,
        paddingBottom: 7,
        width: '80%',
        left: '10%',
    },
    top: {
        flexDirection: 'row',
    },
    picture: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        left: '15%',
        top: '8%',
    },
    pictureImage: {
        height: 100,
        width: 100,
        backgroundColor: 'lightgray',
        position: 'absolute',
        borderRadius: 180,
        left: '50%',
        top: '15%',
    },
    info: {
        marginLeft: '29%',
        marginTop: 45,
        backgroundColor: '#f3f3f3',
        width: '90%',
        height: 190,
        borderRadius: 34,
        left: '-6rem',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
    },
    name: {
        left: '70%',
        bottom: '10%',
    },
    firstName: {
        color: 'black',
        fontSize: 26,
        fontFamily: 'Imprima',
        fontWeight: '600',
        width: 500,
        alignContent: 'center',
    },
    lastName: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Imprima',
        fontWeight: '300',
    },
    school: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -15,
        backgroundColor: '#fff9f9',
        borderRadius: 30,
        width: 180,
        height: 42,
        marginLeft: '42%',
    },
    schoolLogo: {
        height: 33,
        width: 33,
        marginLeft: 10,
    },
    schoolInfo: {
        marginLeft: 20,
    },
    fieldOfStudy: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: 11,
    },
    schoolName: {
        fontFamily: 'Open Sans',
        fontWeight: '400',
        fontSize: 8,
    },
    details: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        width: '100%',
    },
    detailTab: {
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        marginTop: 20,
    },
    detailNum: {
        fontSize: 15,
        marginLeft: 5,
    },
    detailLabel: {
        fontSize: 8,
        fontFamily: 'Kanit',
        fontWeight: '300',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 249, 249, 1)',
        borderRadius: 20,
        marginHorizontal: 19,
        bottom: '-3%',
        marginLeft: 20,
        width: 360,
    },
    bottomImage: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    tab: {
        marginVertical: 5,
    },
    professor: {
        fontSize: 10,
        fontFamily: 'Kanit',
        fontWeight: '400',
    },
    schoolInfo: {
        fontSize: 8,
        fontFamily: 'Kanit',
        fontWeight: '300',
    },
    detailsContainer: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 20,
        // height: 103,
        marginTop: 22,
        top: '.05rem',
        marginVertical: 5,
        bottom: '6%',
        width: 360,
        left: '14%',
    },
    bottomDetailTab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailIcon: {
        height: 20,
        width: 20,
    },
    detailName: {
        fontSize: 13,
        fontFamily: 'Kanit',
        fontWeight: '400',
    },
    detailArrow: {
        height: 15,
        width: 15,
    },
    cardImage: {
        marginTop: 16,
        width: 350,
        height: 'auto',
    },
    line: {
        width: '80%',
        height: 2,
        backgroundColor: '#c2c2c2',
        left: '10%',
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE920',
        borderRadius: 50,
        width: 125,
        height: 46,
        marginTop: 10,
        marginLeft: 10,
    },
    logoutButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Poppins',
    },
    tableContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    table: {
        borderWidth: 1,
        borderColor: 'black',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 5,
    },
    cell: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
    },
    detailArrow: {
        // Add styles for the detail arrow image
    },
    cellWidth: {
        width: '25%', // Each cell occupies 25% of the row width
    },
  
});

export default ProfileScreen;

