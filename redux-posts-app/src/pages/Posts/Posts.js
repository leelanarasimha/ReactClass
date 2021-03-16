import { useEffect, useState } from 'react';
import { connect, useStore } from 'react-redux';

function Posts(props) {
    const store = useStore();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const state = store.getState();
        setPosts(state.posts);
    }, []);

    return (
        <div>
            <div> Posts Page</div>

            <div>
                {posts.map((post) => (
                    <div>
                        <div>Id: {post.id}</div>
                        <div>Title: {post.title}</div>
                        <div>Description: {post.description}</div>
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
