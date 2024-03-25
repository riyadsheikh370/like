import React from 'react'
import './menu.css'
import Logo from "../../assets/logo.png"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="menu_bg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='Menu_options'>Home</Link>
                            <Link className='Menu_options' to="/about">About</Link>
                            <Link className='Menu_options' to="/">Portfolio</Link>
                            <Link className='Menu_options' to="/">Service</Link>
                            <Link className='Menu_options' to="/">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
