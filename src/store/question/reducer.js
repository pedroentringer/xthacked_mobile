import {Types} from './actions';

const INITIAL_STATE = [
  {
    title: 'Ligações Automáticas',
    user: {
      name: 'Pedro Entringer',
    },
    likes: 10,
    dislikes: 20,
  },
  {
    title: 'Ligações Automáticas',
    user: {
      name: 'Pedro Entringer',
    },
    likes: 10,
    dislikes: 20,
  },
  {
    title: 'Ligações Automáticas',
    user: {
      name: 'Pedro Entringer',
    },
    likes: 10,
    dislikes: 20,
  },
];

export default function question(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      let insert = true;
      state.map(question => {
        if (question.id == action.question.id) {
          insert = false;
        }
      });
      return insert ? [...state, action.payload.question] : state;
    default:
      return state;
  }
}
