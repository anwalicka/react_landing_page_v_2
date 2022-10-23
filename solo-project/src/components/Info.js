import React from "react";
import woman from "../images/woman.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
export default function Info() {
    return (
        <div className="info">
            <div className="info--img-container">
                <img src={woman} alt="woman" className="info--img"/>
            </div>
            <div className="info--container">
                <h1 className="info__name">Laura Smith</h1>
                <h2 className="info__job-position">Front End Developer</h2>
                <h3 className="info__website">laurasmith.website</h3>
            </div>
            <div className="info__buttons-container">
                <button className="info--button__email">
                 
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                   
                    email
                    </button>
                <button className="info--button__linkedIn">
                <FontAwesomeIcon icon={solid('user-secret')} />
                    linkedIn</button>
            </div>
        </div>
    );
}