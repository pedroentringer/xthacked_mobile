export const Types = {
  ADD: '@question/ADD',
};

export const addQuestion = question => ({
  type: Types.ADD,
  payload: {
    question,
  },
});
