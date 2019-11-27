import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const tron = Reactotron.configure({host: '192.168.0.18'})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

tron.clear();

console.tron = tron;

export default tron;
