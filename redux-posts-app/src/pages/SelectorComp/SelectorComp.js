import { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../store/actions/CounterActions';
import { getPosts } from '../../store/selectors/PostSelectors';

class SelectorComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Hai Leela</div>

                <div>{this.props.posts.length}</div>

                <div>
                    <button onClick={() => this.props.inc()}>
                        Increment Counter
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(increment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorComp);
