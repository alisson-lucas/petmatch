import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createSwitchNavigator } from 'react-navigation-stack'

import Login from './pages/Login'
import Home from './pages/Home'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
    })
);

export default Routes;