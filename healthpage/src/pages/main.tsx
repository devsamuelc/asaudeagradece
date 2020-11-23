import React from 'react';

import '../styles/pages/main.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Main(){
    return(
        <div id="main-page">
            <div id="cover">
                <div className="cover-content">
                    <h1>A SAÚDE AGRADECE</h1>
                    <h5>O seu blog de dicas, informações e conhecimento geral sobre saúde e qualidade de vida.</h5>
                    <h5>Confira nossos produtos.</h5>
                    <Link to="/about" style={{ textDecoration: 'none' }}><p>Saiba mais</p></Link>
                </div>
            </div>

            <div id="categories">
                <h1>CATEGORIAS</h1>
                <div id="category" className="fitness-cat">
                    <Link to="/fitness" style={{ textDecoration: 'none' }}><p>Quero produtos sobre <span>Fitness</span></p></Link>
                </div>
                <div id="category" className="nutrition-cat">
                    <Link to="/nutrition" style={{ textDecoration: 'none' }}><p>Quero produtos sobre <span>Nutrição</span></p></Link>
                </div>
                <div id="category" className="herbs-cat">
                    <Link to="/herbs" style={{ textDecoration: 'none' }}><p>Quero produtos sobre <span>Ervas Medicinais</span></p></Link>
                </div>
                <div id="category" className="beauty-cat">
                    <Link to="/beauty" style={{ textDecoration: 'none' }}><p>Quero produtos sobre <span>Beleza e Estética</span></p></Link>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    )
}

export default Main;