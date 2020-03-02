import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, HeaderBackButton, HeaderBackground } from 'react-navigation-stack'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Locais from './pages/Locais'

const Tab = createBottomTabNavigator();

function Routes () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Locais" component={Locais} />
        </Tab.Navigator>
    )
}

// const Routes = createAppContainer(
//     createStackNavigator({
//         Login: {
//             screen: Login,
//             navigationOptions: {
//                 headerShown: false
//             }
//         },
//         Home: {
//             screen: Home,
//             navigationOptions: {
//                 headerTitle: 'Home',
//                 headerLeft: () => null
//             }
//         },
//         Cadastro: {
//             screen: Cadastro,
//             navigationOptions: {
//                 headerTitle: 'Cadastro'
//             }
//         },
//         Locais: {
//            screen: Locais,
//             navigationOptions: {
//                 headerTitle: 'Locais',
//                 // headerLeft: () => null
//                 headerBackTitleVisible: false
//             }
//         }
//     }, {
//         defaultNavigationOptions: {
//             headerTintColor: '#000'
//         }
//     })
    
// );

export default Routes;