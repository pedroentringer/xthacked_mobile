export const Types = {
  ADD_POSTS: '@post/ADD_POSTS',
  ADD_POST: '@post/ADD_POST',
};

export const addPosts = posts => ({
  type: Types.ADD_POSTs,
  payload: {
    posts,
  },
});

export const addPost = post => ({
  type: Types.ADD_POST,
  payload: {
    post,
  },
});
