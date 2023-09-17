import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  // Define your list of fields
  const fields = [
    'Account',
    'Notifications',
    'Appearance',
    'Privacy and Security',
    'Help and Support',
    'About',
  ];

  return (
    <View style={styles.container}>
      {/* List of fields */}
      {fields.map((field, index) => (
        <TouchableOpacity
          key={index}
          style={styles.fieldItem}
          onPress={() => {
            // You can add specific navigation logic for each field here
            // For now, it navigates back to the Home screen
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.fieldText}>{field}</Text>
          <Icon
            name="chevron-right"
            type="font-awesome"
            color="#FCCE85"
            size={20}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color as needed
  },
  fieldItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  fieldText: {
    fontSize: 18,
  },
});

export default Settings;
