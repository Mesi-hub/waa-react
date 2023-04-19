import React from "react";

const PostDetails = (props) => {
  const handleEditClick = () => {
    props.onEditClick(props.post.id);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.post.id);
  };

  return (
    <div className="PostDetails">
      <h2>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <div className="Author">By: {props.post.author}</div>
      <div className="Actions">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default PostDetails;
