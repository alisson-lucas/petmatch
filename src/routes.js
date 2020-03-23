import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import HomeRoutes from './routes/homeRoutes'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

const Stack = createStackNavigator();


export default function Routes () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeRoutes} options={{headerTitle: 'PetMatch', headerLeft: false, gestureEnabled: false}} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerBackTitleVisible: false, headerTintColor: '#000'}}/>
        </Stack.Navigator>
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
