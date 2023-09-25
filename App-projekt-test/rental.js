import React, { useState } from 'react'; // Importerer React
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; // Importerer komponenter


import BackgroundImage from './views/rental.png'; // Importerer baggrundsbilledet


import data from './database.json'; // Importerer dataen

const Rental = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [foundData, setFoundData] = useState(null); 

  const handleEmailSearch = () => { // Funktionen til at søge efter emailen

    
    const filteredData = data.filter((item) => item.email === email);

    if (filteredData.length > 0) {
      // data fundet, opdater state
      setFoundData(filteredData);
    } else {
      // Data ik fundet, nulstil state
      setFoundData(null);
    }
  };

  return ( // Returnerer komponenten
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
    resizeMode: 'cover',
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)', //transparent baggrund
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    color: '#095167',  
    width: '100%', 
  },
  emailButton: {
    backgroundColor: '#FCCE85',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '80%', 
  },
  emailButtonText: {
    color: '#095167',
    fontWeight: 'bold',
  },
  foundDataContainer: {
    marginTop: 20,
  },
  foundDataItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  foundDataText: {
    color: '#095167', 
    fontSize: 25, 
    fontWeight: 'bold',
  },
});

export default Rental; // Eksporterer komponenten
