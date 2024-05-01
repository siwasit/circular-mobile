import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import useSessionData from '../../useSessionData';

const BookTracking = ({ navigation }) => {

    const { sessionId, user } = useSessionData();
    const studentId = user['studentId'].toString();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBookingList();
    }, [studentId]);

    const fetchBookingList = async () => {
        try {
            const booksResponse = await fetch(`http://localhost:3000/book-booking/booking-list/${studentId}`);

            if (!booksResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const booksResponseData = await booksResponse.json();
            console.log('Fetched data success:', booksResponseData);
            setBooks(booksResponseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Book📕本</Text>
            <Text style={styles.subtitle}>สถานะการจัดส่ง</Text>

            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder="Search for book" />
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Book Booking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>Book Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Booking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>My Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Book Tracking')} style={styles.button}>
                    <Text style={styles.buttonText}>Book Tracking</Text>
                </TouchableOpacity>
            </View>

            {/* Recommended Books */}
            {/* <MyBookList /> */}
            <View style={styles.container}>
                <View style={styles.bookContainer}>
                    {books.map((book, index) => (
                        <View key={index} style={styles.bookCard}>
                            <Image source={require('../img/books/defaultbook.png')} style={styles.bookImage} />
                            <Text style={styles.bookTitle}>{book['book_name']}</Text>
                            <Text style={styles.bookAuthor}>{book['author']}</Text>
                            <Text style={styles.bookAuthor}>{book['booking_date']}</Text>
                            <Text style={styles.bookAuthor}>{book['return_date']}</Text>
                            <Text style={styles.bookAuthor}>{book['status']}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 13,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        backgroundColor: '#C3002F',
        height: '1%',
        opacity: 0.3,
    },
    title: {
        marginTop: '15%',
        fontSize: 40,
        padding: 20,
        color: '#C3002F',
    },
    subtitle: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: -10,
    },
    searchContainer: {
        position: 'relative',
        marginTop: 15,
        marginLeft: 10,
    },
    input: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 20,
        padding: 12,
        paddingLeft: 19,
        marginBottom: 11,
        width: '95%',
    },
    searchButton: {
        position: 'absolute',
        top: 10,
        right: 40,
    },
    searchIcon: {
        width: 20,
        height: 20,
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
    recommendedContainer: {
        borderRadius: 20,
        margin: 15,
        backgroundColor: 'rgba(254, 186, 0, 1)',
        paddingBottom: 25,
        width: 'auto',
        height: 'auto',
    },
    recommendedTitle: {
        marginLeft: 14,
        paddingTop: 16,
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 24.67,
        letterSpacing: 0.40,
    },
    recommendedScroll: {
        flexDirection: 'row',
        marginLeft: 14,
        marginTop: 20,
    },
    bestSellingContainer: {
        marginTop: 21,
        marginLeft: 14,
        marginRight: 14,
        marginRight: 34,
        height: 188,
        width: 337,
    },
    bestSellingTitle: {
        fontSize: 20,
        paddingLeft: 5,
    },
    bestSellingBooks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bookContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginLeft: -30,
        display: 'grid',
        width: 'auto',
    },
    bookCard: {
        width: '52%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
    },
    bookImage: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    bookTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        borderRadius: 10,
        alignContent: 'center',
        width: 'auto',
    },
    bookAuthor: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
});

export default BookTracking;
