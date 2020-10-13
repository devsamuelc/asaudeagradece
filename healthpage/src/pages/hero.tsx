import React from 'react';

import '../styles/pages/hero.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Hero(){
    return (
        <div id="page-landing">
            <nav>
                <div className="nav-content">
                    <h3 className="logo">E-Pastore</h3>
                    <div className="buttons">
                        <Link to=""  style={{ textDecoration: 'none' }}><p id="subscribe">Inscrever-se</p></Link>
                        <Link to=""  style={{ textDecoration: 'none' }}><p>Saiba Mais</p></Link>
                    </div>
                </div> 
            </nav>

            <div id="hero-content">
                <h1>A SAÚDE AGRADECE</h1>
                <p>Um blog sobre saúde, nutrição e qualidade de vida.</p>
                <Link to="/main" style={{ textDecoration: 'none' }}><h3>Entrar</h3></Link>
            </div>

            <div className="emailfield">
                <h2>Para receber atualizações, digite seu e-mail!</h2>
                <p>Não enviaremos spam!</p>
                <input type="email" name="" id="emailinput"/>
            </div>
            
        </div>


        
    );
}

export default Hero;