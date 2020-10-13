import React from 'react';
import '../styles/pages/hero.css';

import { Link } from 'react-router-dom';

function Hero(){
    return (
        <div id="page-landing">
            <nav>
                <div className="nav-content">
                    <h3 className="logo">E-Pastore</h3>
                    <div className="buttons">
                        <Link to=""  style={{ textDecoration: 'none' }}><p>Inscrever-se</p></Link>
                        <Link to=""  style={{ textDecoration: 'none' }}><p>Saiba Mais</p></Link>
                    </div>
                </div> 
            </nav>

            <div id="hero-content">
                <h1>A SAÚDE AGRADECE</h1>
                <p>Um blog sobre saúde, nutrição e qualidade de vida.</p>
                <Link to="/main" style={{ textDecoration: 'none' }}><h3>Entrar</h3></Link>
            </div>
            
        </div>


        
    );
}

export default Hero;