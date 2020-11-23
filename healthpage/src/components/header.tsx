import React from 'react';

import '../styles/global.css';
import { Link } from 'react-router-dom';
import { BsCaretDownFill } from 'react-icons/bs';

function Header(){
    return(
        <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    
                    {/*Dropdown Menu */}
                    <div id="arrowMenu">
                        <BsCaretDownFill />
                            <ul className="dropDOne">
                                <li><Link to="/main" style={{ textDecoration: 'none' }}>Categorias</Link></li>
                                <li><Link to="/about" style={{ textDecoration: 'none' }}>Sobre</Link></li>
                                <a href="">
                                    <li id="dropDTwo"><BsCaretDownFill /></li></a>
                                    <div className="dropD">
                                        <Link to="/fitness" style={{ textDecoration: 'none' }}><p>Fitness</p></Link>
                                        <Link to="/nutrition" style={{ textDecoration: 'none' }}><p>Nutrição</p></Link>
                                        <Link to="/herbs" style={{ textDecoration: 'none' }}><p>Ervas Medicinais</p></Link>
                                        <Link to="/beauty" style={{ textDecoration: 'none' }}><p>Beleza e Estética</p></Link>
                                    </div>    
                            </ul>
                    </div>

                    {/* Common menu */}
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
    )
            
}

export default Header;