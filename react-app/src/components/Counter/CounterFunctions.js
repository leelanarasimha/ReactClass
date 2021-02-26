import { useState } from 'react';

function CounterFunctions(props) {
    const [counter, setCounter] = useState(6);

    function onIncrement() {
        setCounter(counter + 1);
    }

    function onDecrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <div>Counter Functions</div>
            <div>{counter}</div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>
    );
}

export default CounterFunctions;
