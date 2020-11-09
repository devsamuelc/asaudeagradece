import React from 'react';

import '../styles/global.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';


function Footer(){
    return(
        <div id="footer">
            <div className="soc-networks">
                <p><FaFacebookSquare /> https://www.facebook.com/eleandro.pastorello/</p>
            </div>
            <div className="dev">
                <p>Site criado por Samuel Cruz™.</p>
            </div>
            <div className="info">
                <p>Parcerias:</p>
            </div>
        </div>
    )
            
}

export default Footer;