import React from 'react';
import { Container, Navbar, NavDropdown, Nav, FormControl, Form, Button } from 'react-bootstrap';


import '../styles/global.css';
import { Link } from 'react-router-dom';
import { BsCaretDownFill } from 'react-icons/bs';


export default function Header() {
    
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/"  style={{ textDecoration: 'none' }}>E-PASTORE</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/about"  style={{ textDecoration: 'none' }}></Link>Sobre</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropd-item"><Link to="/fitness" style={{ textDecoration: 'none' }}>Fitness</Link></NavDropdown.Item>
                            <NavDropdown.Item className="dropd-item"><Link to="/nutrition" style={{ textDecoration: 'none' }}>Nutrição</Link></NavDropdown.Item>
                            <NavDropdown.Item className="dropd-item"><Link to="/beauty" style={{ textDecoration: 'none' }}>Beleza</Link></NavDropdown.Item>
                            <NavDropdown.Item className="dropd-item"><Link to="/herbs" style={{ textDecoration: 'none' }}>Ervas Medicinais</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}