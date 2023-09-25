import React from 'react';// Importerer React
import { NavigationContainer } from '@react-navigation/native';// Importere navigationen
import { createNativeStackNavigator } from '@react-navigation/native-stack';// Importerer navigationen
import Homepage from './homepage';
import Profile from './profile';
import Settings from './settings';
import { Text, TouchableOpacity, Image } from 'react-native'; // Importerer komponenter
import { Icon } from 'react-native-elements'; // Importerer ikonerne
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';// Importerer ikonerne
import FeatherIcon from 'react-native-vector-icons/Feather'; // Importerer ikonerne
import Rental from './rental'; // Importerer Rental skærmen

import LogoImage from './views/Logo.png'; //Importerer logoet

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Opretter navigationen og stakken af skærme
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={({ navigation }) => ({
            // Konfiguration af headeren for startsiden
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
            // Konfiguration af headeren for profilskærmen
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
            // Konfiguration af headeren for indstillinger
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
          component={Rental} 
          options={({ navigation }) => ({
            // Konfiguration af headeren for udlejningshistorikskærmen
            headerTitle: 'Rental History',
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
                onPress={() => navigation.goBack()} // Brug navigation.goBack() til at gå tilbage
              >
                <Icon
                  name="arrow-left"
                  type="font-awesome"
                  color="#FCCE85"
                  size={30}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
