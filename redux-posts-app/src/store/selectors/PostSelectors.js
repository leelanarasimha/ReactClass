import { createSelector } from 'reselect';

export const posts = (state) =>
    state.posts.posts.map((post) => post.id !== null);

export const getPosts = createSelector([posts], (posts) => {
    return posts;
});
