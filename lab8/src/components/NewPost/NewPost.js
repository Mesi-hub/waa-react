import React from 'react';
//import './NewPost.css';

const NewPost = ({ title, author, content, onChange, addButtonClicked }) => {
    return (
        <div>
            <h2>Add Post</h2>
            <form>
                <div>
                    <input type="text" name="title"  value={title} onChange={onChange} />
                </div>

                <div>
                    <input type="text" name="author"  value={author} onChange={onChange} />
                </div>
                <div>
                    <textarea name="content" value={content} onChange={onChange} />
                </div>

                <button type="button" onClick={addButtonClicked}>Add Post</button>
            </form>
        </div>
    );
}
export default NewPost;