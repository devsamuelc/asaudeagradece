import React from 'react';
import '../styles/global.css'
import '../styles/pages/nutrition.css';

import { Link } from 'react-router-dom';

function Nutrition(){
    return (
        <div id="page-nutrition">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="/main" style={{ textDecoration: 'none' }}><p>Categorias</p></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><p>Sobre</p></Link>
                        {/*<Link to="/contact" style={{ textDecoration: 'none' }}><p>Contato</p></Link>*/}
                        <div className="dropdown">
                            <p>Produtos</p>
                            <div className="dropdown-content">
                                    <Link to="/fitness" style={{ textDecoration: 'none' }}><p>Fitness</p></Link>
                                    <Link to="/nutrition" style={{ textDecoration: 'none' }}><p>Nutrição</p></Link>
                                    <Link to="/herbs" style={{ textDecoration: 'none' }}><p>Ervas Medicinais</p></Link>
                                    <Link to="/beauty" style={{ textDecoration: 'none' }}><p>Beleza e Estética</p></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>

            
            <div id="cover">
                <div className="cover-content">
                        <p> </p>
                </div>
            </div>

            <h1 className="session-title">Produtos</h1>
           

           <h1 className="session-title">Artigos</h1>
           
            
        </div>
    );
}

export default Nutrition;