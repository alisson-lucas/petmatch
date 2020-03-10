import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home'
import Locais from '../pages/Locais'
import Perfil from '../pages/Perfil'
import { HeaderTitle } from 'react-navigation-stack';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator tabBarOptions >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Locais" component={Locais} options={{title: 'Locais'}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{title: 'Perfil'}} />
    </Tab.Navigator>
  );
}