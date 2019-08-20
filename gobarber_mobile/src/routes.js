import React from 'react'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      SignIn,
      SignUp,
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    }
  )
)
