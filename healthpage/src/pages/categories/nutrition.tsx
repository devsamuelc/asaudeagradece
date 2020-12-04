import React from 'react';
import '../../styles/global.css'
import '../../styles/pages/categories.css'

export default function Nutrition() {
    return (
        <div id="category-page">
            <div id="cover">
                <div className="cover-content nutrition">
                    <p> </p>
                </div>
            </div>

            <h1 className="session-title">Produtos</h1>
            <div id="product-container">
                <div id="product">
                    <h4>Óleo de Avestruz</h4>
                    <a href="https://amzn.to/2ImYpEy"><img src="https://images-na.ssl-images-amazon.com/images/I/51dnuaBiE%2BL._AC_.jpg" alt="" /></a>
                    <div className="more">
                        <p className="prod-description">O Óleo de Avestruz é um suplemento dietético e complexo vitamínico que contém os Omegas 3, 6, 7 e 9, essenciais para o corpo humano, além das vitaminas A e E.</p>
                        <a href="https://amzn.to/2ImYpEy" className="redirect-button"><p>Saiba Mais</p></a>
                    </div>
                </div>

                <div id="product">
                    <h4>Detox Shake</h4>
                    <a href="http://mon.net.br/11fdfi"><img src="https://brasilgeral.org/wp-content/uploads/2020/07/produto-detox-shake-e1594848471765-1280x720.png" alt="" /></a>
                    <div className="more">
                        <p className="prod-description">O maior e mais completo shake emagrecedor do Brasil, possui registro no ministério da saúde e autorização da ANVISA. Ele se destaca por apresentar uma composição 100% natural, contando com poderosos ingredientes cuidadosamente selecionados.</p>
                        <a href="http://mon.net.br/11fdfi" className="redirect-button"><p>Saiba Mais</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}