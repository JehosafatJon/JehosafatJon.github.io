import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ProfilePic from '../assets/profile_pic.JPG';
import "./css/AnimatedLink.css";
import "./css/ProfilePic.css";
import "./css/ButtonStyles.css"
import { SocialMediaLinks } from "./SocialMediaLinks";

export class Sidebar extends Component {
    render() {
        return (
            <div className="Horizontal-test">
                <div className='Side-bar-test'>
                    <div className="Pic-container">
                        <img src= { ProfilePic } alt='Profile Pic' className = "rounded-image" />
                    </div>
                    <h1>Jonathan Hughes</h1>
                    <Link to="/" className="animated-link">Home</Link>
                    <Link to="/about" className="animated-link">About</Link>
                    {/*<Link to="/resume" className="animated-link">Resume</Link>*/}
                    {/* <Link to="/interests" className="animated-link">Skills and Projects</Link> */}
                    {/* <Link to="/awards" className="animated-link">Awards</Link> */}
                    {/* <Link to="/downloads" className="animated-link">Downloads</Link> */}
                    <SocialMediaLinks />
                </div>
                <Outlet />
            </div>
        )
    }
}