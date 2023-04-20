import React,{ useContext } from "react";
import "./Post.css";
import { FetchPostContext } from "../../pages/Dashboard";

const Post = (props)=>{
    const idFunctionContext = useContext(FetchPostContext);
    return(
        <div 
            className="post"
            onClick={() => idFunctionContext(props.id)}
        >
            <p>Id: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
        </div>
    );
}

export default Post;