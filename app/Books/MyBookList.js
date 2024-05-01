import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useSessionData from '../../useSessionData';

const MyBookList = () => {

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
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        {books.map((book, index) => (
          <View key={index} style={styles.bookCard}>
            <Image source={require('../img/books/defaultbook.png')} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{book['book_name']}</Text>
            <Text style={styles.bookAuthor}>{book['author']}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
    marginBottom: 21,
    width: '100%',
    height: 'auto',
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
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
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

export default MyBookList;
