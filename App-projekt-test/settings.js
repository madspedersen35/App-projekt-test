import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
        >
          <Icon
            name="arrow-left"
            type="font-awesome"
            color="#FCCE85"
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Add your settings content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#095167', // Set the header background color to #095167
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    color: '#FCCE85', // Set the header text color to FCCE85
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default Settings;
