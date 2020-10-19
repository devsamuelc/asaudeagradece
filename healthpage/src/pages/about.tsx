import React from 'react';

import '../styles/pages/about.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function AboutPage(){
    return (
        <div id="page-about">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="/main" style={{ textDecoration: 'none' }}><p>Categorias</p></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><p className="selected">Sobre</p></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><p>Contato</p></Link>
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

            <div className="content">
                <h1>Sobre o site.</h1>
                <p>Nós decidimos iniciar o "a saúde agradece" baseado em um grande interesse pelo poder da medicina natural que utiliza-se de exercícios, nutrição e ervas com poder medicinal encontradas na natureza. Acreditamos que não existe segredo para a felicidade genuína, e sim que devemos apreciar a jornada com leveza, saúde e energia, por isso, nosso objetivo maior é proporcionar recursos para que qualquer pessoa de qualquer lugar possa viver uma vida saudável e completa, sem precisar depender de substâncias químicas e intervenções cirúrgicas. Não é nosso intuito desprezar a medicina tradicional, mas sim torná-la menos frequente e menos necessária.</p>
                <p>Pra atingir tal objetivo, separamos o conteúdo do site em três categorias (não necessariamente desligadas uma da outra).</p>
                <h5>Fitness</h5>
                <h5>Nutrição</h5>
                <h5>Ervas Medicinais</h5>
                <p>Em cada categoria, incluímos artigos e dicas de produto para contribuir com a vida de cada leitor.</p>
            </div>
        </div>
    )
}

export default AboutPage;