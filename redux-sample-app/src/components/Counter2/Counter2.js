import { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../store/actions/CounterActions';

class Counter2 extends Component {
    constructor(props) {
        super(props);
    }

    onButtonClick() {
        this.props.increment();
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>{this.props.counter}</div>
                <div>
                    <button onClick={this.onButtonClick.bind(this)}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
