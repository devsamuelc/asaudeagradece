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
                    <h4>Bottox Caps</h4>
                    <a href="https://bottoxcaps.com.br/?mcr=AAT8741451"><img src="https://atardeservicosgraficos.com.br/wp-content/uploads/2020/07/bottox-caps.jpg" alt="" /></a>
                    <p className="prod-description">Cápsulas de colágeno hidrolisado que contribuem para a redução de linhas de expressão, rugas e pés de galinha. Recomendado por dermatologistas em 23 países e agora disponíveis no Brasil.</p>
                </div>
                <div id="product">
                    <h4>Colágeno Larah Bárbara</h4>
                    <a href="https://www.larahbarbara.com.br/?mcr=AQH9262324"><img src="https://cdn.awsli.com.br/600x1000/1591/1591645/produto/59285270/48b050d45d.jpg" alt="" /></a>
                    <p className="prod-description">Cápsulas de colágeno hidrolisado que contribuem para a redução de linhas de expressão, rugas e pés de galinha. Recomendado por dermatologistas em 23 países e agora disponíveis no Brasil.</p>
                </div>
            </div>
            <div id="product-container">
                <div id="product">
                    <h4>A S Sabonetes</h4>
                    <a href="https://app.monetizze.com.br/r/AQQ9662911"><img src="https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/118627825_212296466905473_4938072694210117419_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=tSGdetm6xl0AX-qMF0g&_nc_ht=scontent.fpfb1-1.fna&oh=9f09f18c579c04e32380561e9e251194&oe=5FB3C0FE" alt="" /></a>
                    <p className="prod-description">Este sabonete natural feito de ervas é destinado para pessoas com problemas de pele, tais como dermatite, frieira, psoríase, espinhas e etc.</p>
                </div>
                {/*<div id="product">
                    <h4>Colágeno Larah Bárbara</h4>
                    <a href="https://www.larahbarbara.com.br/?mcr=AQH9262324"><img src="https://cdn.awsli.com.br/600x1000/1591/1591645/produto/59285270/48b050d45d.jpg" alt="" /></a>
                    <p className="prod-description">Cápsulas de colágeno hidrolisado que contribuem para a redução de linhas de expressão, rugas e pés de galinha. Recomendado por dermatologistas em 23 países e agora disponíveis no Brasil.</p>
        	    </div>*/}
            </div>
            
        </div>
    );
}

export default Beauty;