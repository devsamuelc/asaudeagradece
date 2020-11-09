import React from 'react';

import '../../styles/global.css'
import '../../styles/pages/categories.css';

function Fitness(){
    return (
        <div id="category-page">
            <div id="cover">
                <div className="cover-content fitness">
                        <p> </p>
                </div>
            </div>
           
            <h1 className="session-title">Produtos</h1>
           <div id="product-container">
                <div id="product">
                    <h4>Xtreme Fit</h4>
                    <a href="https://app.monetizze.com.br/checkout/DNZ68690"><img src="https://corpinholindo.com/wp-content/uploads/2020/06/XTREME-FIT-Funciona-Bula-Composi%C3%A7%C3%A3o-F%C3%B3rmula-Ingredientes-pre%C3%A7o-Comprar.png" alt="" /></a>
                    <p className="prod-description">O Xtreme Fit é um produto eficaz, seguro e 100% natural que consegue te ajudar a emagrecer de uma vez por todas. O Xtreme fit garante um emagrecimento totalmente saudável, sem receitas médicas e sem riscos à saúde, oferecendo um emagrecimento definitivo.</p>
                </div>
                <div id="product">
                    <h4>Detox Caps</h4>
                    <a href="https://detoxcaps.com.br/?mcr=ADE8730931"><img src="https://detoxcaps.com.br/wp-content/uploads/2020/03/030303.png" alt="" /></a>
                    <p className="prod-description">O Detox Caps ajuda no emagrecimento reduzindo o apetite, aumentando a disposição e eliminando a retenção líquida do corpo, proporcionando resultados visíveis e duradouros.</p>
                </div>
            </div>
            <div id="product-container">
                <div id="product">
                    <h4>Sibutina</h4>
                    <a href="https://sibutina.com.br/?mcr=AXC11198354"><img src="https://s3-sa-east-1.amazonaws.com/monetizzeappbr/img/fotos/121947/1dcb528cb16d7bafc94a3927e68b58e6.png" alt="" /></a>
                    <p className="prod-description">A Sibutina é uma fórmula que auxilia no rápido emagrecimento e eliminação de gordura profunda.</p>
                </div>
                <div id="product">
                    <h4>Sinedrol</h4>
                    <a href="https://sinedrol.com.br/?mcr=ABQ11196298"><img src="https://arscientia.com.br/wp-content/uploads/2020/01/sinedrol.jpg" alt="" /></a>
                    <p className="prod-description">O Sinedro é um suplemento encapsulado de alta tecnologia e performance. Uma fórmula exclusiva com grandes benefícios no ganho de massa magra, emagrecimento, força e definição além de outros benefícios a saúde.</p>
                </div>
            </div>
            <div id="product-container">
                <div id="product">
                    <h4>Adesivo Detox</h4>
                    <a href="https://mon.net.br/11esvn"><img src="https://adesivodetox.com.br/wp-content/uploads/2020/07/54ae0-25972-e1580385341982.jpg" alt=""/></a>
                    <p className="prod-description">O Adesivo Detox auxilia na remoção de toxinas do corpo, promovendo alívio de estresse e emagrecimento saudável e sustentável.</p>
                </div>
                <div id="product">
                    <h4>Anadrole</h4>
                    <a href="http://mon.net.br/10j2f1"><img src="https://miro.medium.com/max/1200/1*XpOYKRcM4WOGvLPz5RPaTw.png" alt=""/></a>
                    <p className="prod-description">O suplemento mais vendido do brasil entre quem deseja construir força e busca um corpo mais musculoso e estético. Ele entrega resultados incríveis usando uma fórmula exclusiva. Dura duas vezes mais do que os concorrentes pelo numero maior de cápsulas e tem um efeito mais potente.</p>
                </div>
            </div>
        </div>
    );
}

export default Fitness;