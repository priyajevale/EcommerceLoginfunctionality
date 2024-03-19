import React from 'react'
import {Nav,Navbar,Container,Badge,Button } from 'react-bootstrap';
import Heading from './Heading';
import Products from './Products';
const NavbarFile = () => {
  return (
    <div>

<Navbar variant="dark" expand="sm" bg="blue"  >
      <Container>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
         <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Button href="#Cart">Cart<Badge bg="success">0</Badge></Button>
           
       
       
      </Container>
    </Navbar>
    <Heading/>
    <Products/>
    </div>
  )
}

export default NavbarFile;