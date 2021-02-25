import { Component } from 'react';
import ShowName from '../ShowName/ShowName';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    onIncrement() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    onDecrement(e) {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>{this.state.counter}</div>
                <ShowName name='Counter' />
                <div>
                    <button onClick={this.onIncrement.bind(this)}>
                        Increment
                    </button>
                    <button onClick={this.onDecrement.bind(this)}>
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
