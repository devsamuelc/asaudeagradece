import React from 'react';

import '../styles/pages/hero.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Hero(){
    return (
        <div id="page-landing">      
            <div id="hero-content">
                <h1>A SAÚDE AGRADECE</h1>
                <p>Um blog sobre saúde, nutrição e qualidade de vida.</p>
                <Link to="/main" style={{ textDecoration: 'none' }}><h3>Entrar</h3></Link>
            </div>


            
        </div>


        
    );
}

export default Hero;