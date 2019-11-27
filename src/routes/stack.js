import {createStackNavigator} from 'react-navigation-stack';

import Viewer from '../pages/Viewer';
import Submit from '../pages/Submit';
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
    Submit: {
      screen: Submit,
      navigationOptions: ({navigation}) => ({
        title: 'Enviar Conteudo',
      }),
    },
  },
  {
    initialRouteName: 'tab',
  },
);

export default stack;
