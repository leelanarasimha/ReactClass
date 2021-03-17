import {
    ADD_POST_ACTION,
    DELETE_POST_ACTION,
    UPDATE_POST_ACTION,
} from '../actions/PostsActions';

const initialState = {
    posts: [
        { id: '1', title: 'asdasdasd', description: 'asdasdasdasd' },
        { id: '2', title: 'asdasdasd', description: 'asdasdasdasd' },
        { id: '3', title: 'asdasdasd', description: 'asdasdasdasd' },
        { id: '4', title: 'asdasdasd', description: 'asdasdasdasd' },
    ],
};

export function PostReducer(state = initialState, action) {
    if (action.type === ADD_POST_ACTION) {
        const posts = [...state.posts];
        posts.push(action.payload);

        return { ...state, posts: posts };
    }

    if (action.type === UPDATE_POST_ACTION) {
        const posts = [...state.posts];

        const postIndex = posts.findIndex(
            (post) => post.id === action.payload.id,
        );

        posts[postIndex] = action.payload;

        return { ...state, posts: posts };
    }

    if (action.type === DELETE_POST_ACTION) {
        const posts = [...state.posts];

        const postIndex = posts.findIndex(
            (post) => post.id === action.payload,
        );
        posts.splice(postIndex, 1);
        return {
            ...state,
            posts,
        };
    }

    return state;
}
