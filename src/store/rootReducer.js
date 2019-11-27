import {combineReducers} from 'redux';

import user from './user/reducer';
import post from './post/reducer';
import question from './question/reducer';

export default combineReducers({
  user,
  post,
  question,
});
