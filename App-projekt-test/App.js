import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './homepage'; // Import your Homepage component
import Profile from './profile'; // Import your Profile component
import Settings from './settings'; // Import your Settings component
import { Text, TouchableOpacity, Image } from 'react-native'; // Import Text, TouchableOpacity, and Image
import { Icon } from 'react-native-elements'; // Import Icon from react-native-elements
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import house icon
import FeatherIcon from 'react-native-vector-icons/Feather'; // Import profile icon

// Import your logo image
import LogoImage from './views/Logo.png'; // Replace with the actual path to your logo image

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                source={LogoImage}
                style={{ width: 55, height: 40 }} // Set the width and height of your logo
              />
            ),
            headerStyle: {
              backgroundColor: '#095167',
            },
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Profile')}
              >
                <FeatherIcon // Profile icon
                  name="user"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Settings')}
              >
                <Icon
                  name="cog"
                  type="font-awesome"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            headerTitle: 'Profile', // Set the header title here
            headerStyle: {
              backgroundColor: '#095167', // Set the header background color
            },
            headerTintColor: '#FCCE85', // Set the header text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Home')}
              >
                <MaterialCommunityIcons // House icon
                  name="home"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Settings')}
              >
                <Icon // Settings icon
                  name="cog"
                  type="font-awesome"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            headerTitle: 'Settings', // Set the header title here
            headerStyle: {
              backgroundColor: '#095167', // Set the header background color
            },
            headerTintColor: '#FCCE85', // Set the header text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Home')}
              >
                <MaterialCommunityIcons // House icon
                  name="home"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
