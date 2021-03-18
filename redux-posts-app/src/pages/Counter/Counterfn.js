import { connect } from 'react-redux';
import { decrement, increment } from '../../store/actions/CounterActions';

function Counterfn(props) {
    function onIncrement() {
        props.increment();
    }

    function onDecrement() {
        props.decrement();
    }
    return (
        <div>
            <div>Counter function Page</div>
            <div>{props.counter}</div>
            <div>
                <button onClick={() => onIncrement()}>Increment</button>
                <button onClick={() => onDecrement()}>Decrement</button>
            </div>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Counterfn);
