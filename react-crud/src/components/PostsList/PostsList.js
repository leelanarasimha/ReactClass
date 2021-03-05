import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PostsList() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    function getPostsHtml() {
        let postsHtml = [];

        if (posts) {
            for (let key in posts) {
                postsHtml.push(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{posts[key].title}</td>
                        <td>{posts[key].description}</td>
                    </tr>,
                );
            }
        }
        return postsHtml;
    }

    return (
        <div className='mt-3'>
            {posts ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>{getPostsHtml()}</tbody>
                </table>
            ) : (
                <div>No Posts Present</div>
            )}
        </div>
    );
}
