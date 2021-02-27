import { Component } from 'react';

export default class LoginClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
        };
    }

    onLoginClick() {
        this.setState({
            isLogin: true,
        });
    }

    onLogoutClick() {
        this.setState({
            isLogin: false,
        });
    }

    render() {
        let loginHtml = null;

        if (this.state.isLogin === true) {
            loginHtml = (
                <div>
                    <button onClick={this.onLogoutClick.bind(this)}>
                        Logout
                    </button>
                </div>
            );
        } else {
            loginHtml = (
                <div>
                    <button onClick={this.onLoginClick.bind(this)}>
                        Login
                    </button>
                </div>
            );
        }
        return (
            <div>
                {!this.state.isLogin && (
                    <div>
                        <button onClick={this.onLoginClick.bind(this)}>
                            Login
                        </button>
                    </div>
                )}

                {this.state.isLogin && (
                    <div>
                        <button onClick={this.onLogoutClick.bind(this)}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
