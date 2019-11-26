import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const tron = Reactotron.configure({host: '10.100.93.88'})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

tron.clear();

console.tron = tron;

export default tron;
