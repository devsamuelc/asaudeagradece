import React from 'react';

import '../../styles/global.css'
import '../../styles/pages/categories.css';

function Herbs(){
    return (
        <div id="category-page">
            <div id="cover">
                <div className="cover-content herbs">
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
                <div id="product">
                    <h4>Adesivo Detox</h4>
                    <a href="https://mon.net.br/11esvn"><img src="https://adesivodetox.com.br/wp-content/uploads/2020/07/54ae0-25972-e1580385341982.jpg" alt=""/></a>
                    <p className="prod-description">O Adesivo Detox auxilia na remoção de toxinas do corpo, promovendo alívio de estresse e emagrecimento saudável e sustentável.</p>
                </div>
            </div>
        </div>
    );
}

export default Herbs;