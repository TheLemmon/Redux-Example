import React from 'react'
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar inverse staticTop>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Ecommerce</a>
            </Navbar.Brand>
            </Navbar.Header>
      </Navbar>
    )
}

export default NavBar