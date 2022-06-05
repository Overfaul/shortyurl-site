import {React, useState} from 'react';
import Logo from '../components/Header/Logo'
import UrlInput from '../components/Main/UrlInput'
import InfoContent from '../components/Main/InfoContent'
import FeautresBlock from '../components/Main/FeaturesBlock';
import Footer from '../components/Footer/Footer'

const MainPage = () => {
    return(
        <div>
            <Logo/>,
            <UrlInput/>,
            <InfoContent/>,
            <FeautresBlock/>,
            <Footer/>
        </div>
    )
}


export default MainPage