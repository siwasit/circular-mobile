import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: '時々ボソッとロシア語でデレる隣のアーリャさん',
      author: 'SunSunSun',
      imageUrl: require('./img/books/tokidoki.png'),
    },
    {
        id: 2,
        title: "Omniscent Reader's Viewpoint (1)",
        author: 'Sing Shong',
        imageUrl: require('./img/books/reader.jpg'),
      },
      {
        id: 3,
        title: '極楽街',
        author: 'Yuto Sano',
        imageUrl: require('./img/books/gokurakugai.jpg'),
      },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        {books.map(book => (
          <View key={book.id} style={styles.bookCard}>
            <Image source={book.imageUrl} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 21,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 14,
  },
  bookContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: -30,
  },
  bookCard: {
    width: '27%', 
    height: '',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    shadowOffset: { width: 0, height: 1 }, 
  },
  bookImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    borderRadius: 10,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default BookList;
