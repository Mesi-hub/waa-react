import React from "react";
import "./PostDetails.css";
const PostDetails = (props) => {
  const handleEditClick = () => {
    props.onEditClick(props.post.id);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.post.id);
  };

  return (
    <div className="PostDetail">
      <h2>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <div className="Author"> {props.post.author}</div>
      <div className="Actions">
        <a href="#" onClick={handleEditClick} className="Edit">
          Edit
        </a>{" "}
        <a href="#" onClick={handleDeleteClick} className="Delete">
          Delete
        </a>
      </div>
    </div>
  );
};

export default PostDetails;
