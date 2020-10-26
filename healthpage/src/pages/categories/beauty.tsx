import React from 'react';

import '../../styles/global.css'
import '../../styles/pages/categories.css';

import { Link } from 'react-router-dom';

function Beauty(){
    return (
        <div id="category-page">  
            <div id="cover">
                <div className="cover-content beauty">
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
                <div id="product">
                    <h4>Shikakai</h4>
                    <a href="https://app.monetizze.com.br/r/ASB11196877"><img src="https://corpinholindo.com/wp-content/uploads/2020/06/SHIKAKAI-Funciona-Bula-Composi%C3%A7%C3%A3o-F%C3%B3rmula-Ingredientes-pre%C3%A7o-Comprar.png" alt="" /></a>
                    <p className="prod-description">Composto de uma planta indiana conhecida como Acacia Concinna, o Shikakai atua fortemente contra a calvície preenchendo falhas no cabelo.</p>
        	    </div>
            </div>
            
        </div>
    );
}

export default Beauty;