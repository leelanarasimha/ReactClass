import { Component } from 'react';

export default class LifeCycleComponent extends Component {
    constructor(props) {
        //Component only once
        super(props);
        console.log('constructor executed');
        this.state = {
            counter: 0,
            name: 'dasdasdsa',
            dinesh: props.name,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived executed');
        console.log(props);
        console.log(state);
        state.dinesh = props.name;
        return state;
    }

    componentDidMount() {
        //executes when component mounted
        console.log('component mounted');
    }

    componentDidUpdate() {
        //executes only when state updated
        console.log('component updated');
    }

    componentWillUnmount() {
        console.log('executed before component Destroyed');
    }

    render() {
        console.log('Render  executed');

        return (
            <div>
                <div>
                    <button
                        onClick={() =>
                            this.setState({
                                counter: this.state.counter + 1,
                            })
                        }
                    >
                        Update COunter : {this.state.counter}
                    </button>
                </div>
                <div>Life Cycle COmponents</div>
            </div>
        );
    }
}
