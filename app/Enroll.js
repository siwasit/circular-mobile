import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';

const Enroll = () => {
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
                                    <Text style={styles.enrollText}>Enroll</Text>
                                </View>
                                <View style={styles.detailDiv}>
                                    <Text style={styles.detailText}>ลงทะเบียนเพิ่ม / ถอน</Text>
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

    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
    },
    modalContent: {
        width: 365,
        height: 800,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        marginTop: 30,
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

export default Enroll;
