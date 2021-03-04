export default function CreatePost(props) {
    return (
        <div>
            <h3>Create Post</h3>
            <form>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea className='form-control'></textarea>
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
