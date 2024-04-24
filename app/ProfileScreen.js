import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FF0000', '#FFD12F']}>
                <ScrollView>
                    <View style={styles.profileCard}>
                        <View style={styles.top}>
                            <View style={styles.picture}>
                                <Image style={styles.pictureImage} />
                            </View>
                            <View style={styles.info}>
                                <View style={styles.name}>
                                    <Text style={styles.firstName}>Nutpraphut</Text>
                                    <Text style={styles.lastName}>Praphutsirikul</Text>
                                </View>
                                <View style={styles.school}>
                                    <Image source={require('./img/Main-Logo.png')} style={styles.schoolLogo} />
                                    <View style={styles.schoolInfo}>
                                        <Text style={styles.fieldOfStudy}>SOFTWARE ENGINEERING</Text>
                                        <Text style={styles.schoolName}>THAMMASAT SCHOOL OF ENGINEERING</Text>
                                    </View>
                                </View>
                                <View style={styles.details}>
                                    <View style={styles.detailTab}>
                                        <Text style={styles.detailNum}>6510742460</Text>
                                        <Text style={styles.detailLabel}>STUDENT ID</Text>
                                    </View>
                                    <View style={styles.detailTab}>
                                        <Text style={styles.detailNum}>3.xx</Text>
                                        <Text style={styles.detailLabel}>G.P.A.</Text>
                                    </View>
                                    <View style={styles.detailTab}>
                                        <Text style={styles.detailNum}>57</Text>
                                        <Text style={styles.detailLabel}>CREDITS</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <Image style={styles.bottomImage} />
                            <View style={styles.tab}>
                                <Text style={styles.professor}>ASS.PROF.DR. xxxxxxx xxxxxxx</Text>
                                <Text style={styles.schoolInfo}>THAMMASAT SCHOOL OF ENGINEERING</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsContainer}>
                        <View style={styles.detailTab}>
                            <Image style={styles.detailIcon} />
                            <Text style={styles.detailName}>PAYMENT LIST</Text>
                            <Image style={styles.detailArrow} />
                        </View>
                        <View style={styles.detailTab}>
                            <Image style={styles.detailIcon} />
                            <Text style={styles.detailName}>CALENDAR</Text>
                            <Image style={styles.detailArrow} />
                        </View>
                        <View style={styles.detailTab}>
                            <Image style={styles.detailIcon} />
                            <Text style={styles.detailName}>SETTING</Text>
                            <Image style={styles.detailArrow} />
                        </View>
                        <View style={styles.detailTab}>
                            <Image style={styles.detailIcon} />
                            <Text style={styles.detailName}>SIGN OUT</Text>
                            <Image style={styles.detailArrow} />
                        </View>
                    </View>

                    <Image style={styles.cardImage} />
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileCard: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 32,
        overflow: 'hidden',
        paddingBottom: 7,
        width: '100%',
    },
    top: {
        flexDirection: 'row',
    },
    picture: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
    },
    pictureImage: {
        height: 120,
        width: 120,
        backgroundColor: 'lightgray',
        position: 'absolute',
        borderRadius: 180,
        left: '90%',
    },
    info: {
        marginLeft: '29%',
        marginTop: 45,
        backgroundColor: '#f3f3f3',
        width: '90%',
        height: 251,
        borderRadius: 34,
        right: '30%',
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
        marginLeft: '40%',
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
        fontSize: 8,
    },
    schoolName: {
        fontFamily: 'Open Sans',
        fontWeight: '400',
        fontSize: 5,
    },
    details: {
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: '40%',
    },
    detailTab: {
        alignItems: 'center',
        marginRight: 10,
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
        marginTop: 10,
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
        height: 128,
        marginTop: 16,
        paddingHorizontal: 32,
        justifyContent: 'space-between',
    },
    detailIcon: {
        height: 20,
        width: 20,
    },
    detailName: {
        fontSize: 14,
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
});

export default ProfileScreen;

