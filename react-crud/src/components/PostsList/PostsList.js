import { useState } from 'react';

export default function PostsList() {
    const [posts, setPosts] = useState(null);
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
                    <tbody>
                        <tr>
                            <td>dsds</td>
                            <td>dsds</td>
                            <td>dsds</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div>No Posts Present</div>
            )}
        </div>
    );
}
