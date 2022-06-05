import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <h2 className="copyright">© Shorty URL 2022</h2>
            <ul>
                <li><a className="fotter-nav" href="http://localhost:3001/">URL Shortener</a></li>
                <li><a className="fotter-nav" href="">Terms of Service</a></li>
                <li><a className="fotter-nav" href="">Privacy</a></li>
                <li><a className="fotter-nav" href="">Contact</a></li>
            </ul>
        </div>
    )
}


export default Footer;