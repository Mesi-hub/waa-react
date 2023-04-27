import React from "react";
import Post from "../Post/Post";

const Posts = ({ data, postClicked }) => {
  return (
    <div>
      {data.map((post) => {
        return (
          <Post
            postClicked={postClicked}
            id={post.id}
            title={post.title}
            author={post.author}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Posts;
