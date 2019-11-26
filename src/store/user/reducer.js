import {Types} from './actions';

const INITIAL_STATE = {
  id: 1,
  email: 'mmalafaia@gmail.com',
  name: 'Manoel Malafaia',
  points_total: 0,
  teacher_id: 2,
  school_id: 1,
  file_id: 1,
  address: 'Rua das Flores 72',
  city: 'São Paulo',
  state: 'SP',
  created_at: '2019-11-26T09:00:00',
  updated_at: '2019-11-26T09:00:00',
};

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
