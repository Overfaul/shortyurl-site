import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <h2 className="copyright">© Shorty URL 2022</h2>
            <ul>
                <li><Link className="fotter-nav" to = "/">URL Shortener</Link></li>
                <li><Link className="fotter-nav" to = "">Terms of Service</Link></li>
                <li><Link className="fotter-nav" to = "/privacy">Privacy</Link></li>
                <li><Link className="fotter-nav" to = "">Contact</Link></li>
            </ul>
        </div>
    )
}


export default Footer;