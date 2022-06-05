import React from "react";
import '../../styles/content-box/FeaturesBlock.css'
const FeautresBlock = () => {

    return(
        <div className="features-section">
            <div className="feature">
                    <img className="feature-img" src ={process.env.PUBLIC_URL + "/rocket-lunch.png"} alt="rocket" />
                    <h2>Speed</h2>
                    <p className = "stext" id = 'stext-speed'>Provides high speed of making short links</p>
            </div>
            <div className="feature">
                    <img className="feature-img" src ={process.env.PUBLIC_URL + "/palette.png"} alt="palette" />
                    <h2>Design</h2>
                    <p className = "stext" id = 'stext-design'>Has an interactive and simple design</p>
            </div>
            <div className="feature">
                    <img className="feature-img" src ={process.env.PUBLIC_URL + "/smartphone.png"} alt="palette" />
                    <h2>Devices</h2>
                    <p className = "stext" id = 'stext-device'>Can be used on smartphones, tablets and desktop</p>
            </div>
        </div>
    )
}


export default FeautresBlock;