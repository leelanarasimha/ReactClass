import { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Leela',
            count: 0,
        };
    }

    hai() {
        console.log(this);
        this.setState({
            name: 'Hai',
        });
        this.setState({
            count: 1,
        });
    }

    render() {
        return (
            <div>
                <div>Hai {this.state.name}</div>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={this.hai.bind(this)}>
                        Click to change Name
                    </button>
                </div>
            </div>
        );
    }
}

export default Welcome;
