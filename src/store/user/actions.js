export const Types = {
  ADD: '@user/ADD_USER',
  REMOVE: '@user/REMOVE_USER',
};

export const addUser = user => ({
  type: Types.ADD,
  payload: {
    user,
  },
});

export const removeUser = () => ({
  type: Types.REMOVE,
});
