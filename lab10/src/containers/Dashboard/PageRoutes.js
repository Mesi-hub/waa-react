import { Route, Routes, Navigate } from "react-router";
import PostDetails from "../../components/PostDetails/PostDetails"
import AddPost from "../../components/AddPost/AddPost";
import Posts from "../../components/Posts/Posts"



export default function PageRoutes(props) {
    return (
        <Routes>

            {/* Put your page routes here...  */}
            <Route path="posts" element={<Posts />} />
            <Route path="add-post" element={<AddPost />} />
            <Route path="posts/:id" element={<PostDetails />} />
        </Routes>
    );
}






