import { Component } from 'react';

class InputData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 4,
            data: 'Leela',
        };
    }

    onClickHandler() {
        this.setState({
            input: 5,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div>Enter Value</div>
                    <input type='text' />
                    <button>Submit</button>
                    <div>{this.state.input}</div>
                </div>
            </div>
        );
    }
}

export default InputData;
