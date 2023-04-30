import React from "react";
import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';
import './Header.css'

const Header = () => {

    return (
        <header className="header">
            <nav>
                <ul>
                    <li> <Link to="/posts">Posts</Link> </li>
                    <li> <Link to="/add-post">New Post</Link> </li>
                    <li> <Link to="/post-details">Post Details</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;