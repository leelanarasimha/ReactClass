import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HttpComponentFunctions(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users`).then((response) => {
            setPosts(response.data.data);
        });
    }, []);

    return (
        <div>
            <div>POsts Data</div>
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
                    {posts.map((user) => {
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
