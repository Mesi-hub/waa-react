import React, { useState } from "react";
import Posts from "../components/Posts/Posts";
import PostDetails from "../components/PostDetails/PostDetails";

const Dashboard = () => {
  const [postsState, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const onPostSelected = (id) => {
    setSelectedPost(postsState.find((post) => post.id === id));
  };

  const onChangeTitle = (event) => {
    const updatedPosts = [...postsState];
    const postToUpdate = updatedPosts.find(
      (post) => post.id === selectedPost.id
    );
    postToUpdate.title = event.target.value;
    setPosts(updatedPosts);
  };

  const onSaveChanges = () => {
    const updatedPosts = [...postsState];
    const postToUpdate = updatedPosts.find(
      (post) => post.id === selectedPost.id
    );
    postToUpdate.title = selectedPost.title;
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  const onEditPost = (id, title, author) => {
    const updatedPosts = [...postsState];
    const postToUpdate = updatedPosts.find((post) => post.id === id);
    postToUpdate.title = title;
    postToUpdate.author = author;
    setPosts(updatedPosts);
  };

  const onDeletePost = (id) => {
    const updatedPosts = postsState.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  return (
    <div>
      <Posts posts={postsState} onPostClick={onPostSelected} />
      <div>
        {selectedPost && (
          <>
            <input
              type="text"
              label={"title"}
              name={"title"}
              id={selectedPost.id}
              value={selectedPost.title}
              onChange={onChangeTitle}
            />
            <br />
            <button onClick={onSaveChanges}>Change Name</button>
          </>
        )}
      </div>
      <div>
        <h2>Post Details</h2>
        {selectedPost ? (
          <PostDetails
            post={selectedPost}
            onEditClick={onEditPost}
            onDeleteClick={onDeletePost}
          />
        ) : (
          <p>Please select a post.</p>
        )}
      </div>
      {/* <div>
        <h2>New Post</h2>
        <NewPost onAddPost={onAddPost} />
      </div> */}
    </div>
  );
};

export default Dashboard;
