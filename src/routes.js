import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, HeaderBackButton, HeaderBackground } from 'react-navigation-stack'

import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Locais from './pages/Locais'

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
                headerTitle: 'Home',
                headerLeft: () => null
            }
        },
        Cadastro: {
            screen: Cadastro,
            navigationOptions: {
                headerTitle: 'Cadastro'
            }
        },
        Locais: {
           screen: Locais,
            navigationOptions: {
                headerTitle: 'Locais',
                // headerLeft: () => null
                headerBackTitleVisible: false
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000'
        }
    })
    
);

export default Routes;