import React,{useState} from 'react'
import {Nav,Navbar,Container,Badge,Button } from 'react-bootstrap';
import Heading from './Heading';
import Products from './Products';
import Cart from './Cart';
const NavbarFile = () => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };
   
  return (
    <div>

<Navbar variant="dark" expand="sm" bg="blue"  >
      <Container>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
         <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Button href="#Cart" onClick={toggleCart}>Cart<Badge bg="success">0</Badge></Button>
           
       
       
      </Container>
    </Navbar>
    <Heading/>
   &&<Products/>
   {showCart && <Cart />}
    </div>
  )
}

export default NavbarFile;