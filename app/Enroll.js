import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Enroll = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.enrollContainer}>
                <View style={styles.enrollDiv}>
                    <Text style={styles.enrollText}>Enroll</Text>
                </View>
                <View style={styles.detailDiv}>
                    <Text style={styles.detailText}>ลงทะเบียน / เพิ่ม-ถอน</Text>
                </View>
                <View style={styles.profileGrid}>
                    <Image source={require('./img/calendar.png')} style={styles.profileImg} />
                    <View style={styles.flexColumn}>
                        <View style={styles.p2}>
                            <Text style={styles.h4}>6510742072</Text>
                        </View>
                        <View style={styles.p2}>
                            <Text style={styles.h5}>Nutpraphut Praphutsirikul</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lastModifyDiv}>
                    <Text style={styles.lastModifyText}>อัพเดทล่าสุด: ปปปป/ดด/วว ชช:นน</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonBox}>
                        <View style={styles.btn}></View>
                        <Text style={styles.toggleBtn} onPress={() => leftClick()}>Chosen Schedule</Text>
                        <Text style={styles.toggleBtn} onPress={() => rightClick()}>Drawn Schedule</Text>
                    </View>
                </View>
                <View style={styles.planContainer}>
                    <View style={styles.planNumber}>
                        <Text style={styles.h3}>Plan 1</Text>
                    </View>
                    <View style={styles.credit}>
                        <Text style={styles.h5}>6 หน่วยกิต</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.p}>
                            <Text style={styles.strong}>FR208</Text> 3 หน่วยกิต (3 หน่วยกิต ลงทะเบียน)
                            {"\n"}
                            ภาษาฝรั่งเศสเพื่อการสื่อสาร 1
                        </Text>
                        <View style={styles.borderRow}></View>
                        <View style={styles.secondClass}>
                            <Text style={styles.p}>
                                <Text style={styles.strong}>LA235</Text> 3 หน่วยกิต (3 หน่วยกิต ลงทะเบียน)
                                {"\n"}
                                ภาษาฝรั่งเศสเพื่อการสื่อสาร 1
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#ff861e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    enrollContainer: {
        width: 364.533,
        height: 692,
        backgroundColor: '#ffffff',
        borderRadius: 22,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: 10,
    },
    enrollDiv: {
        marginLeft: 20,
    },
    enrollText: {
        marginTop: '10%',
        width: 100,
        height: 30,
        color: '#C3002F',
        textAlign: 'center',
        textShadowColor: '#C0002F',
        textShadowOffset: { width: 1, height: 1 },
        fontFamily: 'Poppins',
        fontSize: 40,
        fontWeight: '800',
    },
    
    detailDiv: {
        textAlign: 'center',
        fontFamily: 'Imprima',
        fontSize: 30,
        fontWeight: '400',
        lineHeight: 'normal',
        transform: [{ translateX: "-8%" }],
    },
    profileGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 960,
        margin: '0 auto',
        height: 55,
    },
    profileImg: {
        width: 48.335,
        height: 48.392,
        borderRadius: 48.392,
        marginLeft: 45,
    },
    flexColumn: {
        margin: '5px 90px 0 0',
        fontFamily: 'Poppins',
        transform: [{ translateY: "-31%" }],
        alignItems: 'center',
        height: 90,
    },
    p2: {
        width: 83,
        height: 19.45,
        fontFamily: 'Imprima',
        fontSize: 16,
    },
    h4: {
        fontFamily: 'Imprima',
        fontSize: 16,
    },
    h5: {
        transform: [{ translateY: "-40%" }],
    },
    lastModifyDiv: {
        marginLeft: 20,
    },
    lastModifyText: {
        marginLeft: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 0 0 41px',
        width: 'auto',
        height: 26,
        borderRadius: 20,
        backgroundColor: '#f3f3f3',
    },
    buttonBox: {
        width: 'auto',
        margin: '10px auto',
        position: 'relative',
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
    },
    toggleBtn: {
        padding: '6px 6.5px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        borderWidth: 0,
        position: 'relative',
        textAlign: 'center',
        width: 'auto',
        display: 'inline-block',
    },
    btn: {
        top: 3,
        position: 'absolute',
        width: 127,
        height: 26,
        backgroundColor: '#ffdfae',
        borderRadius: 20,
        transition: '.5s',
        padding: -20,
    },
    h3: {
        paddingTop: 20,
        marginLeft: 10,
        fontFamily: 'Poppins',
        fontSize: 15,
    },
    h5: {
        fontFamily: 'Poppins',
        fontSize: 12,
        width: '4.2rem',
        height: '1.2rem',
        backgroundColor: '#c9c9c9',
        textAlign: 'center',
        borderRadius: 10,
    },
    p: {
        paddingTop: 20,
        fontFamily: 'Poppins',
        fontSize: 13,
    },
    strong: {
        fontWeight: 'bold',
    },
    borderRow: {
        width: 290,
        height: 2,
        backgroundColor: 'rgb(173, 172, 172)',
    },
});

export default Enroll;
