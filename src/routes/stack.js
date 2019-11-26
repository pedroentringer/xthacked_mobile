import {createStackNavigator} from 'react-navigation-stack';

import Login from '../pages/Login';

const stack = createStackNavigator(
  {
    Menu: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Lists: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Listas de Entregas',
      }),
    },
  },
  {
    initialRouteName: 'Menu',
  },
);

export default stack;
