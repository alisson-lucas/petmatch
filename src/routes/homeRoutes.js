import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../pages/Home'
import Locais from '../pages/Locais'
import Perfil from '../pages/Perfil'
import { HeaderTitle } from 'react-navigation-stack';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{showIcon: true, activeTintColor: '#f05a5b'}} >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Ionicons name="md-home" size={32}/>}}>
      </Tab.Screen>
      <Tab.Screen name="Locais" component={Locais} options={{tabBarIcon: () => <Ionicons name="md-map" size={32}/>}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: () => <Ionicons name="pet" size={32}/>}} />
    </Tab.Navigator>
  );
}