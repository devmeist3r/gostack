import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from '~/screens/Main'
import User from '~/screens/User'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7559c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
)

export default Routes
