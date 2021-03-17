import { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    addPostsAction,
    updatePostsAction,
} from '../../store/actions/PostsActions';

function UpdatePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const store = useStore();

    useEffect(() => {
        const state = store.getState();
        const posts = state.posts;

        const id = props.match.params.id;

        const post = posts.find((post) => post.id === id);

        setTitle(post.title);
        setDescription(post.description);
    }, []);

    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        const post = {
            id: props.match.params.id,
            title,
            description,
        };
        dispatch(updatePostsAction(post));
        props.history.push('/posts');
    }

    return (
        <div>
            <h2>Update Post</h2>
            <form onSubmit={onSubmit}>
                <div class='form-group'>
                    <label>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div class='form-group'>
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

export default UpdatePost;
