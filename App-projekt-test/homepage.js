import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./views/kort.png')} //kort billede
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Welcome DOCK BOX,
        </Text>
        <Text style={styles.subtitle}>
          Find your nearest location
        </Text>

        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingVertical: 32, 
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
