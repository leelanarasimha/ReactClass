import axios from 'axios';
import { useEffect, useState } from 'react';

export function UpdateUser(props) {
    const [id, setId] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const idData = props.match.params.id;
        setId(idData);
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${idData}.json`,
            )
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            });
    }, [props.match.params.id]);

    return (
        <div>
            <div>Id: {id}</div>
            <div>name: {user.title}</div>
            <div>name: {user.description}</div>
        </div>
    );
}
