import React, { useEffect, useState, useRef } from "react";
import AddPost from "../AddPost/AddPost";
import PostDetails from "../PostDetails/PostDetails";
import Posts from "../Posts/Posts";
import axios from "axios";

export const FetchPostContext = React.createContext();

function Dashboard() {
  const [postData, setPostData] = useState([]);
  const [postDetails, setPostDetails] = useState("");
  const [postId, setPostId] = useState(0);
  const [trackDeleteBtn, setTrackDeleteBtn] = useState(false);
  const titleForm = useRef();

  useEffect(() => {
    function fetchData() {
      axios
        .get("http://localhost:8080/api/v1/posts")
        .then((response) => setPostData(response.data))
        .catch((error) => {
          console.log("Failed to fetch posts");
        });
    }
    fetchData();
  }, [trackDeleteBtn]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = titleForm.current;

    const dataForm = {
      id: form["id"].value,
      title: form["title"].value,
      content: form["content"].value,
      author: form["author"].value,
    };

    const copy = [...postData];

    copy[0].title = dataForm.title === "" ? "Happiness" : dataForm.title;

    setPostData(copy);
  };

  const postClicked = (id) => {
    let details = postData.filter((post) => post.id === id);
    setPostId(id);
    setPostDetails(details);
  };

  function deletePostById() {
    axios.delete(`http://localhost:8080/api/v1/posts/${postId}`).then(() => {
      setTrackDeleteBtn(!trackDeleteBtn);
      setPostDetails([]);
    });
  }

  function newPost(post) {
    axios
      .post("http://localhost:8080/api/v1/posts", post)
      .then(() => {
        setTrackDeleteBtn(!trackDeleteBtn);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <FetchPostContext.Provider value={postClicked}>
      <Posts data={postData} />

      <form ref={titleForm} onSubmit={handleSubmit}>
        <input type="text" label={"title"} name={"title"} />
        <button>Change Name</button>
      </form>

      <div>
        <PostDetails
          postDetails={postDetails}
          deletePostById={deletePostById}
        />
      </div>

      <div>
        <AddPost addPost={newPost} />
      </div>
    </FetchPostContext.Provider>
  );
}

export default Dashboard;
