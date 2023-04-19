import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="Post" onClick={() => props.onSelect(props.id)}>
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default Post;
