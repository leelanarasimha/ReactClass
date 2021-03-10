import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            });
    }

    function onDelete(id) {
        if (window.confirm('r u sure you want to delete?')) {
            axios
                .delete(
                    `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${id}.json`,
                )
                .then((response) => {
                    getPosts();
                });
        }
    }

    function getPostsHtml() {
        let postsHtml = [];

        for (let key in posts) {
            postsHtml.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{posts[key].title}</td>
                    <td>{posts[key].description}</td>
                    <td>
                        <Link
                            to={{ pathname: `/updatepost/${key}` }}
                            className='btn btn-warning'
                        >
                            Update
                        </Link>
                        &nbsp;
                        <button
                            className='btn btn-danger'
                            onClick={() => onDelete(key)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>,
            );
        }

        return postsHtml;
    }

    return (
        <div>
            <div>
                <h2>Posts Data</h2>
                <div class='text-right'>
                    <Link to='/createpost' className='btn btn-primary'>
                        Create Post
                    </Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{getPostsHtml()}</tbody>
                </table>
            </div>
        </div>
    );
}
