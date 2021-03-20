import {
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
} from '../actions/CounterActions';

const initialState = {
    counter: 0,
};

export function CounterReducer(state = initialState, action) {
    if (action.type === INCREMENT_COUNTER) {
        var state2 = { ...state };
        state2.counter = state.counter + 1;
        return state2;
        // return {
        //     ...state,
        //     counter: state.counter + 1,
        // };
    }
    if (action.type === DECREMENT_COUNTER) {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }
    return state;
}
