import axios from 'axios';
import { useEffect, useState } from 'react';
import { UpdatePost } from '../UpdatePost/UpdatePost';

export default function PostsList() {
    const [posts, setPosts] = useState(null);
    const [updatePost, setUpdatePost] = useState(false);
    const [updatePostDetails, setUpdatePostDetails] = useState([]);

    useEffect(() => {
        if (!updatePost) {
            getPosts();
        }
    }, [updatePost]);

    function getPosts() {
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                setPosts(response.data);
            });
    }

    function onUpdateHandler(post, id) {
        setUpdatePostDetails({ ...post, id: id });
        setUpdatePost(true);
    }

    function onDeleteHandler(id) {
        if (window.confirm('Are you sure you want to delete post')) {
            axios
                .delete(
                    `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${id}.json`,
                )
                .then((response) => {
                    console.log(response.data);
                    getPosts();
                });
        }
    }

    function getPostsHtml() {
        let postsHtml = [];

        if (posts) {
            for (let key in posts) {
                postsHtml.push(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{posts[key].title}</td>
                        <td>{posts[key].description}</td>
                        <td>
                            <button
                                className='btn btn-warning'
                                onClick={() =>
                                    onUpdateHandler(posts[key], key)
                                }
                            >
                                Update
                            </button>
                            &nbsp;
                            <button
                                className='btn btn-danger'
                                onClick={() => onDeleteHandler(key)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>,
                );
            }
        }
        return postsHtml;
    }

    return (
        <div>
            {updatePost && (
                <UpdatePost
                    showPosts={() => setUpdatePost(false)}
                    postDetails={updatePostDetails}
                />
            )}
            {!updatePost && (
                <div className='mt-3'>
                    {posts ? (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>{getPostsHtml()}</tbody>
                        </table>
                    ) : (
                        <div>No Posts Present</div>
                    )}
                </div>
            )}
        </div>
    );
}
