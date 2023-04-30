import { Route, Routes, Navigate } from "react-router";
import PostDetails from "../../components/PostDetails/PostDetails"
import AddPost from "../../components/AddPost/AddPost";
import Posts from "../../components/Posts/Posts"
import Login from "../../components/Login/Login";

export default function PageRoutes(props) {
    return (

        <Routes>

            {/* Put your page routes here...  */}
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="add-post" element={<AddPost />} />
            <Route path="/post-details" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />

        </Routes>

    );
}






