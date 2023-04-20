
import "./Posts.css";
const Posts = ({ posts, onPostClick }) => {
  return (
      <div className="posts-container">
    
        {posts.map(post => (
            <div className="post" key={post.id} onClick={() => onPostClick(post)}>

              <p>Id:{post.id}</p>
              <p>Title:{post.title}</p>
              <p>Author: {post.author}</p>
            </div>
        ))}
      </div>
  );
};

export default Posts;