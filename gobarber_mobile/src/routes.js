import React from 'react'

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

/**
 * Login
 */
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

/**
 * Tabs
 */
import Dashboard from '~/pages/Dashboard'
import Profile from '~/pages/Profile'

/**
 * Stack
 */
import SelectProvider from '~/pages/New/SelectProvider'
import SelectDateTime from '~/pages/New/SelectDateTime'
import Confirm from '~/pages/New/Confirm'

export default (isSigned = false) =>
  createAppContainer(
    createAnimatedSwitchNavigator(
      {
        Sign: createAnimatedSwitchNavigator(
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
        ),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agenda',
                tabBarIcon: (
                  <Icon
                    name="add-circle"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  )
