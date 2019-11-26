import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../pages/Home';
import Info from '../pages/Info';
import Profile from '../pages/Profile';

const tab = createBottomTabNavigator(
  {
    Info: {
      screen: Info,
      navigationOptions: props => ({
        tabBarOptions: {
          activeTintColor: 'rgba(2, 82, 142, 1)',
          inactiveTintColor: 'rgba(0, 0, 0, 0.26)',
          gesturesEnabled: false,
        },
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <FontAwesome5
                name={'info-circle'}
                size={20}
                color={'rgba(2, 82, 142, 1)'}
              />
            );
          } else {
            return (
              <FontAwesome5
                name={'info-circle'}
                size={20}
                color={'rgba(0, 0, 0, 0.26)'}
              />
            );
          }
        },
      }),
    },
    Home: {
      screen: Home,
      navigationOptions: props => ({
        tabBarOptions: {
          activeTintColor: 'rgba(2, 82, 142, 1)',
          inactiveTintColor: 'rgba(0, 0, 0, 0.26)',
          gesturesEnabled: false,
        },
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <FontAwesome5
                name={'home'}
                size={20}
                color={'rgba(2, 82, 142, 1)'}
              />
            );
          } else {
            return (
              <FontAwesome5
                name={'home'}
                size={20}
                color={'rgba(0, 0, 0, 0.26)'}
              />
            );
          }
        },
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: props => ({
        tabBarOptions: {
          activeTintColor: 'rgba(2, 82, 142, 1)',
          inactiveTintColor: 'rgba(0, 0, 0, 0.26)',
          gesturesEnabled: false,
        },
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <FontAwesome5
                name={'user'}
                size={20}
                color={'rgba(2, 82, 142, 1)'}
                solid
              />
            );
          } else {
            return (
              <FontAwesome5
                name={'user'}
                size={20}
                color={'rgba(0, 0, 0, 0.26)'}
                solid
              />
            );
          }
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    resetOnBlur: true,
  },
);

export default tab;
