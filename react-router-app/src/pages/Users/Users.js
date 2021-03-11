import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import CreateUser from '../CreateUser/CreateUser';
import { UpdateUser } from '../UpdateUser/UpdateUser';
import './Users.css';
export function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            });
    }, []);

    function getUsersHtml() {
        let usersHtml = [];

        for (let key in users) {
            usersHtml.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{users[key].title}</td>
                    <td>{users[key].description}</td>
                    <td>
                        <Link
                            to={{ pathname: `/users/updateuser/${key}` }}
                            className='btn btn-warning'
                        >
                            Update
                        </Link>
                        &nbsp;
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>,
            );
        }
        return usersHtml;
    }

    return (
        <div>
            <h2>Users Data</h2>
            <Link to='/users/createuser' class='btn btn-primary'>
                Create User
            </Link>
            <div className='d-flex'>
                <div class='flex-1'>
                    <table class='table'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>{getUsersHtml()}</tbody>
                    </table>
                </div>
                <div class='flex-1'>
                    <div class='ml-4'>
                        <Route
                            path='/users/createuser'
                            component={CreateUser}
                        />
                        <Route
                            path='/users/updateuser/:id'
                            component={UpdateUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
