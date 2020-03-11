import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Home from '../pages/Home'
import Locais from '../pages/Locais'
import Perfil from '../pages/Perfil'
import { HeaderTitle } from 'react-navigation-stack';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{showIcon: true, activeTintColor: '#f05a5b'}} >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Ionicons name="md-home" size={32}/>, activeTintColor: '#f05a5b'}}  />
      <Tab.Screen name="Locais" component={Locais} options={{tabBarIcon: () => <Ionicons name="md-map" size={32}/>, activeTintColor: '#f05a5b'}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: () => <Ionicons name="md-paw" size={32}/>, activeTintColor: '#f05a5b'}} />
    </Tab.Navigator>
  );
}