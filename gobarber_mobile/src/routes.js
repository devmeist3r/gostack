import React from 'react'
import { Transition } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

/**
 * Login
 */
import Dashboard from '~/pages/Dashboard'
import Confirm from '~/pages/New/Confirm'
import SelectDateTime from '~/pages/New/SelectDateTime'
import SelectProvider from '~/pages/New/SelectProvider'
import Profile from '~/pages/Profile'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

/**
 * Tabs
 */

/**
 * Stack
 */

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
