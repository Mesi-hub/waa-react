import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {

  const [posts, setposts] = useState([]); //empty array or add one object , if n/w is not connected we can see it loaded

  // before rendering, how to fetch here.. axios.get("http//:...") or using the following 
  const fetchposts = () => {
    axios.get('http://localhost:8080/api/v1/posts')
      .then((res) => {
        console.log(res)
        // use maintained state
        setposts(res.data)
      }).catch((err) => {
        console.log(err.message)
      });
  }
  // include useEffect

  useEffect(() => {
    //callback
    fetchposts()
  }, [])


  const postList = posts.map(post => {
    return (
      <div className='Content'>
        <Link to={`${post.id}`} key={post.id}>
          {/* <div className='container'> */}
          <Post
            title={post.title}
            author={post.author}
            // content={s.content}
            // id={post.id}
            key={post.id}
          />
          {/* </div> */}

          <button className='button-container'>Follow</button>
        </Link>

      </div>

    )
  })


  return (
    //render posts. fetch from the databse and load them 
    // <div>posts</div>
    <div>{postList}</div>
  )
}

export default Posts;