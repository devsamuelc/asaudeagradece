import React from 'react';

import '../styles/pages/fitness.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function Fitness(){
    return (
        <div id="page-fitness">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="/main" style={{ textDecoration: 'none' }}><p>Categorias</p></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><p>Sobre</p></Link>
                        <Link to="/products" style={{ textDecoration: 'none' }}><p>Produtos</p></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><p>Contato</p></Link>
                    </div>
                </div>
            </nav>

            
            <div id="cover">
                <div className="cover-content">
                        <p> </p>
                </div>
            </div>

            <div id="content">
                <h1>Artigos</h1>
                <div className="articles">
                    <div className="row">
                        <div className="article">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                            <h5>Título</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                        </div>
                        <div className="article">
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                            <h5>Título</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                        </div>
                        <div className="article">
                            <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt=""/>
                            <h5>Título</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                        </div>
                    </div>
                </div>
                <h1>Produtos</h1>
                <div className="products">
                    <div className="row">
                            <div className="article">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                                <h5>Título</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                            </div>
                            <div className="article">
                                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                                <h5>Título</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                            </div>
                            <div className="article">
                                <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt=""/>
                                <h5>Título</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet euismod orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nunc sem. Phasellus vel ipsum eget lorem varius tincidunt. Nullam hendrerit libero eu quam facilisis, in venenatis quam rutrum.</p>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Fitness;