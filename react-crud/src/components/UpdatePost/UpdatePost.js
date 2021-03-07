import axios from 'axios';
import { useState } from 'react';

export function UpdatePost(props) {
    const [postDetails, setPostDetails] = useState({
        ...props.postDetails,
    });

    function updatePost(e) {
        e.preventDefault();
        const singlePost = {
            title: postDetails.title,
            description: postDetails.description,
        };
        axios
            .put(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts/${postDetails['id']}.json`,
                singlePost,
            )
            .then((response) => {
                console.log(response.data);
                props.showPosts();
            });
    }
    return (
        <div>
            <h2>Update Post Data</h2>
            <div>
                <button onClick={props.showPosts}>Back To Posts</button>
            </div>
            <form onSubmit={updatePost}>
                <div className='form-group'>
                    <label>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        value={postDetails.title}
                        onChange={(e) =>
                            setPostDetails({
                                ...postDetails,
                                title: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea
                        className='form-control'
                        value={postDetails.description}
                        onChange={(e) =>
                            setPostDetails({
                                ...postDetails,
                                description: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
                <div>
                    <button className='btn btn-primary'>
                        Update Post
                    </button>
                </div>
            </form>
        </div>
    );
}
