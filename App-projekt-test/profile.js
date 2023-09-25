import React, { useState } from 'react'; // Importerer React
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Importerer komponenter
import { Icon } from 'react-native-elements'; // Importerer ikonerne

const Profile = ({ navigation }) => { // Opretter komponenten
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instagramAccount, setInstagramAccount] = useState('');

  const handleEditProfile = () => {
    // Implementer logik til at opdatere brugerprofilen 
  };

  const handleViewRentalHistory = () => {
    
    navigation.navigate('Rental'); // Navigerer til Rental skærmen
  };
// Returnerer komponenten
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity style={styles.profilePictureContainer}>
        <Image
          source={require('./views/profil.png')} //profilbillede
          style={styles.profilePicture}
        />
        <Icon
          name="camera"
          type="font-awesome"
          color="#FCCE85"
          size={20}
          containerStyle={styles.cameraIcon}
        />
      </TouchableOpacity>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      {/* Instagram Account Input */}
      <TextInput
        style={styles.input}
        placeholder="Instagram Account"
        value={instagramAccount}
        onChangeText={text => setInstagramAccount(text)}
      />

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={handleEditProfile}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* View Rental History Button */}
      <TouchableOpacity
        style={styles.viewHistoryButton}
        onPress={handleViewRentalHistory}
      >
        <Text style={styles.viewHistoryButtonText}>View Rental History</Text>
      </TouchableOpacity>
    </View>
  );
};
// Styling af komponenter
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 5,
    marginVertical: 10,
    paddingLeft: 10,
  },
  editButton: {
    backgroundColor: '#095167',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FCCE85',
    fontWeight: 'bold',
  },
  viewHistoryButton: {
    backgroundColor: '#FCCE85',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  viewHistoryButtonText: {
    color: '#095167',
    fontWeight: 'bold',
  },
});

export default Profile;
