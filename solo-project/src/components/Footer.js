import React from "react";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="footer__container">
           <span className="footer--icon">
                <FontAwesomeIcon icon={brands('square-twitter')} />
            </span> 
            <span className="footer--icon">
                <FontAwesomeIcon icon={brands('square-instagram')} />
            </span> 
            <span className="footer--icon">
                <FontAwesomeIcon icon={brands('square-facebook')} />
            </span> 
            <span className="footer--icon">
                <FontAwesomeIcon icon={brands('square-github')} />
            </span> 
        </div>
    );
}