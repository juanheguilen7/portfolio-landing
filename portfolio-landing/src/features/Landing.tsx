import React from "react";
import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Form from "./form/Form";
import Footer from "./footer/Footer";

const Landing = () =>{
    return(
        <>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Form/>
            <Footer/>
        </>
    )
}

export default Landing;