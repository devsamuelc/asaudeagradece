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
                
            </div>
        </div>
    );
}

export default Herbs;