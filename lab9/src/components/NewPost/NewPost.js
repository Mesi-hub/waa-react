import React, { useRef } from "react";

import "./AddPost.css";

const AddPost = (props) => {
  const addPostFormRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    let formData = addPostFormRef.current;

    let newData = {
      author: formData["author"].value,
      title: formData["title"].value,
      content: formData["content"].value,
    };

    props.addPost(newData);
  }

  return (
    <div>
      <form ref={addPostFormRef} onSubmit={handleSubmit}>
        <div className="div-form">
          <label>Title: </label>
          <input type="text" name={"title"} />
        </div>

        <div className="div-form">
          <label>Content: </label>
          <textarea name={"content"} />
        </div>

        <div className="div-form">
          <label>Author: </label>
          <input type="text" name={"author"} />
        </div>

        <div className="div-form">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
