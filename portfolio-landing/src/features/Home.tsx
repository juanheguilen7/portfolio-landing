import React from "react";
import './Home.css'

import Footer from "./Footer/Footer";
import Header from "./Header/HeaderComponent";
import MainComponent from "./Main/MainComponent";



const Home = () => {

    return (
        <>
            <div className="container">
                <Header/>
                <MainComponent/>
                <Footer />
            </div>
        </>
    )
}

export default Home;