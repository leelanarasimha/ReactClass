import { useEffect, useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePostsAction } from '../../store/actions/PostsActions';
import { increment } from '../../store/actions/CounterActions';

function Posts(props) {
    const store = useStore();
    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        const state = store.getState();
        setPosts(state.posts.posts);
        setCounter(state.counter.counter);
    }

    function onDeletePost(postId) {
        if (window.confirm('R u sure you want to delete')) {
            dispatch(deletePostsAction(postId));
            getPosts();
        }
    }

    return (
        <div>
            <h2> Posts Page</h2>
            <div>Counter: {counter}</div>
            <div>
                <Link to='/createpost'>Create Post</Link>
            </div>

            <div className='d-flex'>
                {posts.map((post) => (
                    <div className='flex-1 p-3'>
                        <div>Id: {post.id}</div>
                        <div>Title: {post.title}</div>
                        <div>Description: {post.description}</div>
                        <div>
                            <Link
                                to={{ pathname: `/updatepost/${post.id}` }}
                            >
                                Update Post
                            </Link>
                        </div>

                        <div>
                            <button onClick={() => onDeletePost(post.id)}>
                                Delete Post
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps)(Posts);
