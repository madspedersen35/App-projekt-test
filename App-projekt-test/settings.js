import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Settings = () => { 
  const navigation = useNavigation(); // Opretter navigationen

  const fields = [ // Opretter en liste af felter
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
            
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.fieldText}>{field}</Text>
          <Icon // Opretter en pil til højre for felterne
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

const styles = StyleSheet.create({ // Styling af komponenter
  container: {
    flex: 1,
    backgroundColor: 'white', 
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
