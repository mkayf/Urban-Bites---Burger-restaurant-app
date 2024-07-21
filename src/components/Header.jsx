import React, { useState } from 'react'
import '../styles/HeaderStyle.css'
import logo from'../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  const [nav, setNav] = useState(false);

  // scrollbar animation
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  }

  window.addEventListener('scroll', changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="md" className={`${nav ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Urban Bites Logo" className='logo img-fluid'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-collapsed'>
          <Nav className="ms-auto">
          <Nav.Link>
              <NavLink to="/" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                Home
            </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/about" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                About
            </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/menu" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                Menu
            </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/shop" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                Shop
            </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/blog" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                Blog
            </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/contact" className={({isActive}) => `
              nav_links
                ${isActive ? 'active_link' : ''}
              `}>
                Contact
            </NavLink>
            </Nav.Link>

            <Nav.Link>
                <div className='cart'>
                <NavLink to="/contact" className={({isActive}) => `
              nav_links cart-navlink
                ${isActive ? 'active_link' : ''}
              `}>
                <i className="bi bi-bag fs-5"></i>
                <em className='roundpoint'>2</em>
                </NavLink>
                </div>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header