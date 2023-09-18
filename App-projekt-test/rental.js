import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Import your background image
import BackgroundImage from './views/rental.png'; // Replace with the actual path to your background image

// Import your JSON data
import data from './database.json'; // Replace with the correct path to your JSON file

const Rental = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [foundData, setFoundData] = useState(null); // State to store the found data

  const handleEmailSearch = () => {
    // Process the data here and display it in your component
    // For example, you can filter data based on the entered email
    const filteredData = data.filter((item) => item.email === email);

    if (filteredData.length > 0) {
      // Data found, update the state
      setFoundData(filteredData);
    } else {
      // Data not found, reset the state
      setFoundData(null);
    }
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Your Trips */}
        <Text style={styles.text}>Your Trips</Text>

        {/* Search Title */}
        <Text style={styles.searchTitle}>Search For Trips</Text>

        {/* Search Input Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        {/* Email Search Button */}
        <TouchableOpacity style={styles.emailButton} onPress={handleEmailSearch}>
          <Text style={styles.emailButtonText}>Search</Text>
        </TouchableOpacity>

        {/* Display found data */}
        {foundData && (
          <View style={styles.foundDataContainer}>
            {foundData.map((item, index) => (
              <View key={index} style={styles.foundDataItem}>
                <Text style={styles.foundDataText}>Type: {item.type}</Text>
                <Text style={styles.foundDataText}>Date: {item.date}</Text>
                <Text style={styles.foundDataText}>Duration: {item.duration}</Text>
                <Text style={styles.foundDataText}>Price: {item.price} kr.</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can customize the resizeMode as per your requirements
  },
  text: {
    color: '#FCCE85',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchTitle: {
    color: '#FCCE85',
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    paddingHorizontal: 20,
    width: '80%',
  },
  emailInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white background
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    color: '#095167', // Text color changed to #095167
    width: '100%', // Make the input as wide as the container
  },
  emailButton: {
    backgroundColor: '#FCCE85',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '80%', // Adjust as needed
  },
  emailButtonText: {
    color: '#095167',
    fontWeight: 'bold',
  },
  foundDataContainer: {
    marginTop: 20,
  },
  foundDataItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Less transparent background
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  foundDataText: {
    color: '#095167', // Text color changed to #FCCE85
    fontSize: 25, // You can adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default Rental;
