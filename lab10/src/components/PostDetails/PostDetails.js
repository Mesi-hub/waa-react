import React from "react";
import "./PostDetails.css";
import Comment from "../Comments/Comments";
import Post from "../Post/Post";

const PostDetails = (props) => {

  const params = useParams(); //:id
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState();

  useEffect(() => {

    axios.get('http://localhost:8080/api/v1/posts/' + params.id)
      .then((res) => {
        setPostDetail(res.data)
      }).catch((err) => {
        console.log(err.message)
      });


  }, [params.id])

  const deleteButton = (id) => {
    axios.delete('http://localhost:8080/api/v1/posts/' + id) //params.id
      .then((res) => {
        navigate('/posts') // 
      }).catch((err) => {
        console.log(err)
      });
  }

  let postDetailsDisplay = null;
  if (params.id && postDetail) {

    postDetailsDisplay = (
      <div className="ProductDetail">
        <div >
          {/* <div>
                    <h3> Student Info </h3>
                </div>
                Name: {postDetail.name}<br />
                ID: {postDetail.id}
                <div >
                    GPA: {postDetail.gpa}
                    <br />
                </div> */}

          <div>
            {postDetail.courseList == null ? "Term status: inactive" : "Courses"}

            {postDetail.courseList ? postDetail.courseList.map(p => {
              return <Post pId={p.id} key={p.id} title={p.title} author={p.title} />
            }) : null}
          </div>

          <div>
            {/* <button onClick={deleteButton}>Delete</button> */}
            <button onClick={() => { deleteButton(params.id) }}>Delete</button>
            <button>Follow/Unfollow</button>
            <button onClick={() => {
              navigate("/posts")
            }}>Back</button>
          </div>


        </div>
      </div>)
  }
  return postDetailsDisplay;
}
export default PostDetails;
