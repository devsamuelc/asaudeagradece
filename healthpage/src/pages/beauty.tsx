import React from 'react';

import '../styles/pages/beauty.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Beauty(){
    return (
        <div id="page-beauty">
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
                                    <Link to=" beauty" style={{ textDecoration: 'none' }}><p>Ervas Medicinais</p></Link>
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
                    <h4>Bottox Caps</h4>
                    <a href="http://makepages.com.br/r/AAT8741451"><img src="https://atardeservicosgraficos.com.br/wp-content/uploads/2020/07/bottox-caps.jpg" alt="" /></a>
                    <p className="prod-description">Cápsulas de colágeno hidrolisado que contribuem para a redução de linhas de expressão, rugas e pés de galinha. Recomendado por dermatologistas em 23 países e agora disponíveis no Brasil.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Beauty;