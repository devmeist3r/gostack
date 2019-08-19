import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
)