export const INCREMENT_COUNTER = '[counter action] increment';
export const DECREMENT_COUNTER = '[counter action ] decrement';

export function increment() {
    return {
        type: INCREMENT_COUNTER,
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER,
    };
}
