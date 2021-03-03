import React, { Component } from 'react';

export default class RegistrationUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
    }

    onNameChange(e) {
        console.log(this.name.current.value);
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    ref={this.name}
                    onKeyUp={this.onNameChange.bind(this)}
                />
            </div>
        );
    }
}
