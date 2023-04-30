import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './AddPost.css';

const AddPost = (props) => {

  const newPostForm = useRef();

  const navigate = useNavigate();

  const PostHandler = (e) => {
    e.preventDefault();
    const form = newPostForm.current;
    const data = {
      title: form['title'].value,
      author: form['author'].value,
      content: form['content'].value
    };
    console.log(data);
    axios.post('http://localhost:8080/api/v1/posts', data)
      .then(data => {
        navigate('/posts');
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  return (
    <div className="NewProduct">
      <form ref={newPostForm} onSubmit={PostHandler}>
        <h1>Add a Post</h1>

        <label>Title</label>
        <input type="text"
          label={'title'}
          name={'title'}
        />

        <label>Author</label>
        <input type="text"
          label={'author'}
          name={'author'}
        />
        <label>Content</label>
        <input type="text"
          label={'content'}
          name={'content'}
        />
        <button>Add Post </button>
      </form>

    </div>
  );

}

export default AddPost;