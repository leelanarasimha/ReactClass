import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            title: '',
            description: '',
        };
    }

    onCreatePost(e) {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            description: this.state.description,
        };

        axios
            .post(
                `https://react-class-6e078-default-rtdb.firebaseio.com/posts.json`,
                postData,
            )
            .then((response) => {
                this.props.history.push('/users');
            });
    }
    render() {
        return (
            <div>
                <div>Create Post</div>
                <div>
                    <Link to='/posts'>Back to Posts</Link>
                </div>

                <div>
                    <form onSubmit={this.onCreatePost.bind(this)}>
                        <div class='form-group'>
                            <label>Title</label>
                            <input
                                type='text'
                                value={this.state.title}
                                onChange={(e) =>
                                    this.setState({
                                        title: e.target.value,
                                    })
                                }
                                className='form-control'
                            />
                        </div>
                        <div class='form-group'>
                            <label>Description</label>
                            <textarea
                                className='form-control'
                                value={this.state.description}
                                onChange={(e) =>
                                    this.setState({
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='btn btn-primary'
                            >
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
