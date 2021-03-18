import { combineReducers, createStore } from 'redux';
import { CounterReducer } from './reducers/CounterReducer';
import { PostReducer } from './reducers/PostsReducer';

const reducers = combineReducers({
    posts: PostReducer,
    counter: CounterReducer,
});

const store = createStore(reducers);

export default store;
