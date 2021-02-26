import { Component } from 'react';

export default class AdditionClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Sum: {+this.props.a + +this.props.b}</div>
            </div>
        );
    }
}
