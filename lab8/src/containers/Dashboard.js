import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import NewPost from "../components/NewPost/NewPost";
import axios from "axios";


const Dashboard = () => {
  const [posts, setPosts] = useState([
    //   { id: 111, title: 'Happiness', author: 'John', content: 'This is the content in the post...' },
    //  { id: 112, title: 'MIU', author: 'Dean', content: 'This is the content in the post...' },
    //  { id: 113, title: 'Enjoy Life', author: 'Jasmine', content: 'This is the content in the post...' }
  ]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [nextId, setNextId] = useState(114);
  const [postState, setPostState] = useState({
    title: "",
    author: "",
    content: "",
  });
  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (event) => {
    const copy = { ...postState };
    copy[event.target.name] = event.target.value;
    setPostState(copy);
  };

  const addButtonClicked = () => {
    const copy = { ...postState };
    copy.id = nextId;
    setNextId(nextId + 1);
    axios
      .post("http://localhost:8080/api/v1/posts", copy)
      .then((response) => {
        setPosts([...posts, response.data]);
        setPostState({ title: "", author: "", content: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const PostClick = (post) => {
    setSelectedPost(post);
  };
 
  const updatePostTitle = () => {
   

    const updatedPosts = posts.map((post) => {
      if (post.id === selectedPost.id) {
        return { ...post, title: updatedTitle };
      }
      return post;
    });


    setPosts(updatedPosts);
    setSelectedPost({ ...selectedPost, title: updatedTitle });
  };

  const editPostBtn = () => {
    console.log("Edit Button for post:", selectedPost);
    axios
      .put(
        `http://localhost:8080/api/v1/posts/${selectedPost.id}`,
        selectedPost
      )
      .then((response) => {
        const updatedPosts = posts.map((post) => {
          if (post.id === selectedPost.id) {
            return response.data;
          }
          return post;
        });
        setPosts(updatedPosts);
        setSelectedPost(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deletePostBtn = () => {
    axios
      .delete(`http://localhost:8080/api/v1/posts/${selectedPost.id}`)
      .then((response) => {
        const updatedPosts = posts.filter(
          (post) => post.id !== selectedPost.id
        );
        setPosts(updatedPosts);
        setSelectedPost(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
 

  return (
    <div className="container">
      <Posts
        posts={posts}
        onPostClick={PostClick}
        updatedTitle={updatedTitle}
      />
      {selectedPost && (
        <div className="post-details">
          <h2>Post Details</h2>
          <h3>
            <u>{selectedPost.title}</u>
          </h3>
          <p>Author: {selectedPost.author}</p>
          <p>Content: {selectedPost.content}</p>
          <button onClick={editPostBtn}>Edit</button>
          <button onClick={deletePostBtn}>Delete</button>
        </div>
      )}
      <div className="newPost">
        <NewPost
          title={postState.title}
          author={postState.author}
          content={postState.content}
          onChange={onChange}
          addButtonClicked={addButtonClicked}
        />
      </div>

      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={updatePostTitle}>Change Name</button>
    </div>
  );
};

export default Dashboard;
