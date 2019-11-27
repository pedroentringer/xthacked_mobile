import {createStackNavigator} from 'react-navigation-stack';

import Viewer from '../pages/Viewer';
import tab from './tab';

const stack = createStackNavigator(
  {
    tab: {
      screen: tab,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Viewer: {
      screen: Viewer,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.post.title,
      }),
    },
  },
  {
    initialRouteName: 'tab',
  },
);

export default stack;
