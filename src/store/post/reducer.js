import {Types} from './actions';

const INITIAL_STATE = [];

export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_POST:
      let insert = true;
      state.map(post => {
        if (post.id == action.post.id) {
          insert = false;
        }
      });
      return insert ? [...state, action.payload.post] : state;
    case Types.ADD_POSTS:
      return action.posts;
    default:
      return state;
  }
}
