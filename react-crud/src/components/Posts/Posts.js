import { useState } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import PostsList from '../PostsList/PostsList';

export default function Posts(props) {
    const [showCreatePost, setShowCreatePost] = useState(false);

    function onCreatePostClick() {
        setShowCreatePost(true);
    }

    function showPosts() {
        setShowCreatePost(false);
    }

    return (
        <div>
            <h2>Posts List</h2>
            <div className='text-right'>
                <button
                    className='btn btn-primary'
                    onClick={onCreatePostClick}
                >
                    Create Post
                </button>
            </div>
            <div>
                {showCreatePost ? (
                    <CreatePost showposts={showPosts} />
                ) : (
                    <PostsList />
                )}
            </div>
        </div>
    );
}
