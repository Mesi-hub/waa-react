import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {
  const params = useParams(); // :id
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);


  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:8080/api/v1/posts/${params.id}`)
        .then((res) => {
          setPostDetail(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:8080/api/v1/posts/${params.id}/comments`)
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [params.id]);


  const deleteButton = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/posts/${id}`)
      .then((res) => {
        navigate('/posts');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let postDetailDisplay = null;

  postDetailDisplay = (
    <div className="ProductDetail">
      <div>
        <div>
          <h3>Post Info</h3>
        </div>
        Title: {postDetail.title}
        <br />
        Author: {postDetail.author}
        <br />
        Content: {postDetail.content}
        <br />
        {comments.length > 0 ? 'Comments' : 'No comments'}
        {comments.map((comment) => (
          <Comment id={comment.id} key={comment.id} content={comment.content} />
        ))}
        <br />
        <div>
          <button onClick={() => deleteButton(params.id)}>Delete</button>
          <button onClick={() => navigate('/posts')}>Back</button>
        </div>
      </div>
    </div>
  );

  return postDetailDisplay;
};

export default PostDetails;
