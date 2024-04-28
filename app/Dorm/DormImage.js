import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Get device width for responsive image sizing

const images = [
  {
    id: 1,
    imageUrl: require('./img/room/room1.png'),
  },
  {
    id: 2,
    imageUrl: require('./img/room/room2.png'),
  },
  {
    id: 3,
    imageUrl: require('./img/room/room3.png'),
  },
];

const DormImage = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true} // Enable autoplay (optional)
        autoplayTimeout={3000} // Customize autoplay interval (in milliseconds)
        loop={true} // Enable image loop
        pagination={true} // Show pagination dots
        dotColor={'#ccc'} // Default dot color
        activeDotColor={'#000'} // Default active dot color
        // Add styles for more control (optional)
        style={styles.swiperContainer}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={image.imageUrl} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  swiperContainer: {
    // Adjust height based on your needs
    height: width * 0.5, // Example: Half of device width
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dots: { // Override default styles if needed
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default DormImage;