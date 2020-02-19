import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Home'
            }
        },
        Cadastro: {
            screen: Cadastro,
            navigationOptions: {
                headerTitle: 'Cadastro'
            }
        }
    })
);

export default Routes;