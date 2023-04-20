import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import AddPost from "../components/AddPost/AddPost";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";

export const FetchPostContext = React.createContext();
function Dashboard() {
  const [title, setTitle] = useState("");

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
        .catch(new Error());
    }
    fetchData();
  }, [trackDeleteBtn]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = titleForm.current;

    const dataForm = {
      title: form["title"].value,
    };

    const copy = [...postData];

    copy[0].title = dataForm.title === "" ? "Happiness" : dataForm.title;

    setPostData(copy);
    setTitle("");
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

  function addPost(post) {
    // axios.post(`localhost:8080/api/v1/users/${id}/posts`);
    axios
      .post(`http://localhost:8080/api/v1/users/1/posts`, post)
      .then(() => setTrackDeleteBtn(!trackDeleteBtn));
  }

  return (
    // <div>
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
        <AddPost addPost={addPost} />
      </div>
    </FetchPostContext.Provider>
  );
}

export default Dashboard;