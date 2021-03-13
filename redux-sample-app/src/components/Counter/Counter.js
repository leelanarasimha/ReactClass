import { Component } from 'react';
import { increment } from '../../store/actions/CounterActions';
import store from '../../store/store';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        const storeState = store.getState();
        this.setState({
            counter: storeState.counter,
        });

        store.subscribe(() => {
            const storeState = store.getState();
            this.setState({
                counter: storeState.counter,
            });
        });
    }

    onButtonClick() {
        store.dispatch(increment());
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>{this.state.counter}</div>
                <div>
                    <button onClick={this.onButtonClick.bind(this)}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}
