import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div className="Footer-container">
            <h1>&copy;</h1>
            <div className="Footer-Icons">
                <a href="https://twitter.com/ShoaibAhmedSohu">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                <a href="https://www.facebook.com/shoaib.sohoo/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                <a href="https://www.instagram.com/shoaibahmed1_/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/mortiestmorty1">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    )
}
export default Footer