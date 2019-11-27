export const Types = {
  ADD: '@post/ADD',
};

export const addFeed = post => ({
  type: Types.ADD,
  payload: {
    post,
  },
});
