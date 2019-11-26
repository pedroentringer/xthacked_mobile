import React from 'react';
import {createAppContainer} from 'react-navigation';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import {Transition} from 'react-native-reanimated';

import Login from './pages/Login/';

import stack from './stack';

export default (isLogged = false) =>
  createAppContainer(
    createAnimatedSwitchNavigator(
      {
        Login,
        stack,
      },
      {
        initialRouteName: isLogged ? 'stack' : 'Login',
        transition: (
          <Transition.Together>
            <Transition.Out type="fade" durationMs={600} />
            <Transition.In type="fade" durationMs={400} />
          </Transition.Together>
        ),
      },
    ),
  );
