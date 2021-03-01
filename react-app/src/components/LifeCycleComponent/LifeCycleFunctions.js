import { useEffect, useState } from 'react';
export default function LifeCycleFunctions() {
    const [counter, setCounter] = useState(0);

    console.log('before render');

    //Executes on Mounted and updates
    useEffect(() => {
        console.log('executed on mounted and updated');
    });

    //executes only on mounted
    useEffect(() => {
        console.log('executed only on mounted');
    }, []);

    //executes on unmounted and also on update
    useEffect(() => {
        return () => {
            console.log('executes on unmounted and update');
        };
    });

    //executes only on unmounted
    useEffect(() => {
        return () => {
            console.log('executes only on unmounted');
        };
    }, []);

    return (
        <div>
            <div>Counter: {counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>
                    Update Counter
                </button>
            </div>
            <div>Life cycle function</div>
        </div>
    );
}
