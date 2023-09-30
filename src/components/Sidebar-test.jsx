import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ProfilePic from '../assets/profile_pic.JPG';
import "./css/AnimatedLink.css";
import "./css/ProfilePic.css";

export class SidebarTest extends Component {
    render() {
        return (
            <div className="Horizontal-test">
                <div className='Side-bar-test'>
                    <img src= { ProfilePic } alt='Profile Pic' className = "rounded-image" />
                    <h1>Jonathan Hughes</h1>
                    <Link to="/" className="animated-link">Learn React! / home</Link>
                    <Link to="/about" className="animated-link">About</Link>
                    <Link to="/resume" className="animated-link">Resume</Link>
                    <Link to="/interests" className="animated-link">Interests</Link>
                    <p>~~social links~~</p>
                </div>
                <Outlet />
            </div>
        )
    }
}