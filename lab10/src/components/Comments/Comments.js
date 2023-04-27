import React from "react";

const Comment = (props) => {
  return (
    <div>
      {props.comments.length > 0 && (
        <>
          <h3>Comments</h3>
          {props.comments.map((comment) => {
            return <p key={comment.id}>{comment.name}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Comment;
