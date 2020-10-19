import React from 'react';

import '../styles/pages/herbs.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Herbs(){
    return (
        <div id="page-herbs">
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
           <div id="product-container">
                <div id="product">
                    <h4>Motumbo</h4>
                    <a href="https://motumbo.com.br/?mcr=ACQ11196388"><img src="https://motumbo.com.br/wp-content/uploads/2020/01/Mockup_motumbo500-1.png" alt="" /></a>
                    <p className="prod-description">O Motumbo é um suplemento que auxilia no aumento da libido e na saúde sexual.</p>
                </div>
                
            </div>

           <h1 className="session-title">Artigos</h1>
        </div>
    );
}

export default Herbs;