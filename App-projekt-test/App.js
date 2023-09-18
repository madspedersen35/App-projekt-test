import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './homepage';
import Profile from './profile';
import Settings from './settings';
import Rental from './rental'; // Import your Rental (formerly History) component
import { Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import LogoImage from './views/Logo.png';

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
                style={{ width: 55, height: 40 }}
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
                <FeatherIcon
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
            headerTitle: 'Profile',
            headerStyle: {
              backgroundColor: '#095167',
            },
            headerTintColor: '#FCCE85',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Home')}
              >
                <MaterialCommunityIcons
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
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            headerTitle: 'Settings',
            headerStyle: {
              backgroundColor: '#095167',
            },
            headerTintColor: '#FCCE85',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Home')}
              >
                <MaterialCommunityIcons
                  name="home"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Rental"
          component={Rental} // Corrected component name to Rental
          options={({ navigation }) => ({
            headerTitle: 'Rental History',
            headerStyle: {
              backgroundColor: '#095167',
            },
            headerTintColor: '#FCCE85',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
