import axios from 'axios';
import { useState } from 'react';

export default function CreatePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    function onCreatePostHandler(e) {
        //validatuons check
        e.preventDefault();

        let isError = false;

        //Title Validation Check
        if (title === '') {
            setTitleError('Title is required');
            isError = true;
        }

        //Description Validation Check
        if (description === '') {
            setDescriptionError('Description is required');
            isError = true;
        }

        //If any errors stops here return
        if (isError) return;

        //i need to do post request if no errors found
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
                setMessage('POst successfully created');
                props.showposts();
                console.log(response.data);
            });
    }

    return (
        <div>
            <h3>Create Post</h3>
            <div>
                <button onClick={props.showposts}>Back to Posts</button>
            </div>
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
                    {titleError && <div>{titleError}</div>}
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea
                        className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {descriptionError && <div>{descriptionError}</div>}
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
