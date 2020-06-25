import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Home from '../pages/Home'
import Locais from '../pages/Locais'
import Perfil from '../pages/Perfil'
import Matchs from '../pages/Matchs'
import Camera from '../pages/Camera'
import NovaFoto from '../pages/NovaFoto'
import { HeaderTitle } from 'react-navigation-stack';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{showIcon: true, activeTintColor: '#f05a5b'}} >
      <Tab.Screen name="Home"   component={Home} options={{tabBarIcon: () => <Ionicons name="md-home" size={30}/>, activeTintColor: '#f05a5b'}}  />
      <Tab.Screen name="Matchs" component={Matchs} options={{tabBarIcon: () => <Ionicons name="md-heart" size={30}/>, activeTintColor: '#f05a5b',title: 'Matchs'}}  />
      <Tab.Screen name="NovaFoto" component={NovaFoto} options={{tabBarIcon: () => <Ionicons name="md-camera" size={30}/>, activeTintColor: '#f05a5b'}}/>
      <Tab.Screen name="Locais" component={Locais} options={{tabBarIcon: () => <Ionicons name="md-map" size={30}/>, activeTintColor: '#f05a5b'}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: () => <Ionicons name="md-paw" size={30}/>, activeTintColor: '#f05a5b'}} />
    </Tab.Navigator>
  );
}