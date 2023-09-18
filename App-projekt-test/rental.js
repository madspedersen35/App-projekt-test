import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Import your background image
import BackgroundImage from './views/rental.png'; // Replace with the actual path to your background image

const Rental = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleEmailSearch = () => {
    // Implement email search functionality here based on the 'email' state
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Your Trips */}
        <Text style={styles.text}>Your Trips</Text>

        {/* Search Input Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Search For Trips</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        {/* Email Search Button */}
        <TouchableOpacity style={styles.emailButton} onPress={handleEmailSearch}>
          <Text style={styles.emailButtonText}>Search</Text>
        </TouchableOpacity>

        {/* Add more content here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can customize the resizeMode as per your requirements
  },
  homeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  text: {
    color: '#FCCE85',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  inputTitle: {
    color: '#FCCE85',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white background
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    color: '#FCCE85',
  },
  emailButton: {
    backgroundColor: '#FCCE85',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20, // Center the button
  },
  emailButtonText: {
    color: '#095167',
    fontWeight: 'bold',
  },
});

export default Rental;
