import { Component } from 'react';
import axios from 'axios';

export default class HttpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        axios.get(`https://reqres.in/api/users`).then((response) => {
            this.setState({
                users: response.data.data,
            });
        });
    }

    render() {
        return (
            <div>
                <div>Http Component</div>

                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <img src={user.avatar} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
