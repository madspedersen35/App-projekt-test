import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./views/kort.png')} // Replace with the actual path to your full-screen image
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Welcome DOCK BOX,
        </Text>
        <Text style={styles.subtitle}>
          Find your nearest location
        </Text>

        {/* Round icon in the corner */}
        {/* Add your Button with an icon here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end', // Align content at the bottom
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
    paddingVertical: 32, // Adjust the top and bottom padding as needed
    paddingHorizontal: 24,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Homepage;
