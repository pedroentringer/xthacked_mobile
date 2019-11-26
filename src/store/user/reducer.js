import {Types} from './actions';

const INITIAL_STATE = [];

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        user: action.payload.user,
      };
    case Types.REMOVE:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
