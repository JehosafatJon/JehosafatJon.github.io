import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export class SocialMediaLinks extends Component {
    render() {
        return (
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jonathan-hughes-526344252/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/> 
                </a>
                <a href="https://github.com/JehosafatJon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x"/> 
                </a>
                {/* <a href="https://www.instagram.com/jonnyhuughes/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x"/> 
                </a> */}
            </div>
        )
    }
}
