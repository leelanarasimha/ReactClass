import { Component } from 'react';

export default class RegistrationClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <div>Name: {this.state.name}</div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                />
            </div>
        );
    }
}
