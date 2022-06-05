import React from "react";
import '../../styles/content-box/InfoContent.css'
const InfoContent = () => {
    return(
        <section className = "info-section">
            
                <h1 className = "info-title">Simple and pleasant design</h1>
                <p className = "info-text">
                    URL Shortener's design was made specially for people who'd like to make short URLs with less efforts and transitions between pages.
                    Just a couple of clicks and unique short URL is created and copied!
                </p>
                
                <h1 className = "info-title">What is it used for?</h1>
                <p className = "info-text">
                    This simple shortener turns long URL links into short ones that makes using and reading them more conveniently.
                    Just paste your link into the input and press the button and after that you'll get a button with your shortened URL,
                    press it and you will automatically copy shortened URL 
                </p>
        </section>
    )
}

export default InfoContent