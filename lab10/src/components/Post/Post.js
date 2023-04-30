
const Post = (props) => {

    return (
        <div className="Content" >
            <h3> {props.title}</h3>
            {/* <h3> {props.content}</h3> */}
            <h3> {props.author}</h3>
            {/* <h3> {props.id}</h3> */}
        </div>

    );
}

export default Post;
