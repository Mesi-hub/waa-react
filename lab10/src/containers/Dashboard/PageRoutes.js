import { Route, Routes, Navigate } from "react-router";
import Students from "../../components/Student/Students";
import StudentDetails from "../../components/StudentDetails";
import AddPost from "../../components/AddPost/AddPost";
import Posts from "../../components/Posts/Posts"



export default function PageRoutes(props) {
    return (
        <Routes>

            {/* Put your page routes here...  */}
            <Route path="posts" element={<Posts />} />
            <Route path="add-post" element={<AddPost />} />
            {/* <Route path="students/:id" element={<StudentDetails />} /> */}
        </Routes>
    );
}






