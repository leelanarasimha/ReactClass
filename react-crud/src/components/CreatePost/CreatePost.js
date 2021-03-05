import axios from 'axios';
import { useState } from 'react';

export default function CreatePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    function onCreatePostHandler(e) {
        //validatuons check

        e.preventDefault();
        //i need to do post request
        const postData = {
            title: title,
            description: description,
        };

        axios
            .post(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
                postData,
            )
            .then((response) => {
                setMessage('POst successfull created');
                console.log(response.data);
            });
    }

    return (
        <div>
            <h3>Create Post</h3>
            {message && (
                <div className='alert alert-success'>{message}</div>
            )}

            <form onSubmit={onCreatePostHandler}>
                <div className='form-group'>
                    <label>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea
                        className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <button className='btn btn-primary'>
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
}
