import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UpdateUser(props) {
    const [post, setPost] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        const idData = props.match.params.id;
        setId(idData);
        //need to call backend to send me all details
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${idData}.json`,
            )
            .then((response) => {
                setPost(response.data);
            });
    }, [props.match.params.id]);

    function onChangeTitle(e) {
        const singlePost = { ...post }; //{...post}
        singlePost.title = e.target.value;

        setPost(singlePost);
    }

    function onUpdatePost(e) {
        e.preventDefault();
        axios
            .put(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${id}.json`,
                post,
            )
            .then((response) => {
                props.history.push('/users');
            });
    }

    return (
        <div>
            <h2>Update Post</h2>
            <div>
                <form onSubmit={onUpdatePost}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={post.title}
                            onChange={(e) =>
                                setPost({ ...post, title: e.target.value })
                            }
                        />
                    </div>

                    <div className='form-group'>
                        <label>Description</label>
                        <textarea
                            className='form-control'
                            value={post.description}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>

                    <div>
                        <button type='submit'>Update Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
