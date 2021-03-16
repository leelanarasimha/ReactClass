import { createStore } from 'redux';
import { PostReducer } from './reducers/PostsReducer';

const store = createStore(PostReducer);

export default store;
