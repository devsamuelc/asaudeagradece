import React from 'react';
import '../styles/pages/main.css';

import { Link } from 'react-router-dom';

function Main(){
    return(
        <div id="main-page">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="" style={{ textDecoration: 'none' }}><p>Sobre</p></Link>
                        <Link to="" style={{ textDecoration: 'none' }}><p>Contato</p></Link>
                        <Link to="" style={{ textDecoration: 'none' }}><p>Produtos</p></Link>
                    </div>
                </div>
            </nav>
            <div id="cover">
                <div className="cover-content">
                    <h1>A SAÚDE AGRADECE</h1>
                    <h5>O seu blog de dicas, informações e conhecimento geral sobre saúde e qualidade de vida.</h5>
                    <h5>Confira nossos artigos e produtos.</h5>
                    <Link to="" style={{ textDecoration: 'none' }}><p>Ver mais</p></Link>
                </div>
            </div>

            <div id="categories">
                <h1>CATEGORIAS</h1>
                <div id="fitness-category">
                    <Link to="" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Fitness</span></p></Link>
                </div>
                <div id="nutrition-category">
                    <Link to="" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Nutrição</span></p></Link>
                </div>
                <div id="health-category">
                    <Link to="" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Ervas Medicinais</span></p></Link>
                </div>
            </div>

            <footer>
                
            </footer>
        </div>
    )
}

export default Main;