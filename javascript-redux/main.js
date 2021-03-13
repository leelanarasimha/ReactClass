//state
const initialState = {
    counter: 4,
};

//reducer
function counterReducer(state = initialState, action) {
    if (action.type === 'increment_counter') {
        // const stateData = Object.assign({}, state);
        // stateData.counter = state.counter + 1;
        // return stateData;
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    return state;
}

const store = Redux.createStore(counterReducer);

const state = store.getState();

document.getElementById('counter').innerHTML = state.counter;

store.subscribe(function () {
    const state = store.getState();

    document.getElementById('counter').innerHTML = state.counter;
});

//action

//action creator
function increment() {
    //action
    return {
        type: 'increment_counter',
    };
}

document
    .getElementById('increment_button')
    .addEventListener('click', function () {
        store.dispatch(increment());
    });
