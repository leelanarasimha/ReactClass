const initialState = {
    counter: 4,
};

export function CounterReducer(state = initialState, action) {
    if (action.type === 'increment_counter') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    return state;
}
