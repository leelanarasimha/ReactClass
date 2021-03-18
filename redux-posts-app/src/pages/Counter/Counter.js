import { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../store/actions/CounterActions';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    onIncrement() {
        this.props.increment();
    }

    onDecrement() {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <div>Counter Page</div>
                <div>{this.props.counter}</div>
                <div>
                    <button onClick={() => this.onIncrement()}>
                        Increment
                    </button>
                    <button onClick={() => this.onDecrement()}>
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
