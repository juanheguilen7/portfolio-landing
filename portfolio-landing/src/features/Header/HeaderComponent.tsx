import React from "react";
import './Header.css';
import Linkedin from '../../Assets/icons/linkedin.svg';
import Gmail from '../../Assets/icons/gmail.svg';
import Github from '../../Assets/icons/github.svg';


const HeaderComponent = () => {

    return (
        <header className="top">
            <div>
                logo
            </div>
            <div className="box-icons">
                <img src={Linkedin} alt="icon linkedin" className="icon" />
                <img src={Gmail} alt="icon gmail" className="icon" />
                <img src={Github} alt="icon github" className="icon" />
            </div>

        </header>
    )
}

export default HeaderComponent;