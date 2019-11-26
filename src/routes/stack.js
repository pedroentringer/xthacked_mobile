import {createStackNavigator} from 'react-navigation-stack';

import Viewer from '../pages/Viewer';

const stack = createStackNavigator(
  {
    Viewer: {
      screen: Viewer,
      navigationOptions: ({title}) => ({
        title: title,
      }),
    },
  },
  {
    initialRouteName: 'Viewer',
  },
);

export default stack;
