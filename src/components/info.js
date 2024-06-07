import React from "react"
import "../App.css"
import Photo from "./Photo.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Info(){
    const handleEmailMe = () => {
        window.location.href = "mailto:shoaib.sohoo123@gmail.com";
    }
    const handleLindkedin = () => {
        window.location.href= "https://www.linkedin.com/in/shoaib-ahmed-94ba3225b/";
    }
    return(
        <div className="Info-container">
            <img src={Photo} className="photo"/>
            <h1 className="Info-name">Shoaib Ahmed</h1>
            <p className="profession">Front-end DEV</p>
            <a href="">shoaib.com</a>
            <div className="buttons">
        
             <button className="Info-email" 
                onClick={handleEmailMe}>
                <FontAwesomeIcon icon={faEnvelope} />
                   Email
                 </button>
             <button className="Info-linkden"
                onClick={handleLindkedin}> 
                <FontAwesomeIcon icon={faLinkedinIn} /> 
                  LinkedIn
                </button>
            </div>
        </div>
    )
}


export default Info