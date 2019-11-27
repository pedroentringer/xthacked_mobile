import {Types} from './actions';

const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return action.user;
    case Types.REMOVE:
      return {};
    default:
      return state;
  }
}
