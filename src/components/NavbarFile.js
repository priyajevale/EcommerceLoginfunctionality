import React, { useState, useContext } from 'react';
import { Nav, Navbar, Container, Badge, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import Heading from './Heading';
import Products from './Products';
import Cart from './Cart';

const NavbarFile = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(CartContext);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div>
            <Navbar variant="dark" expand="sm" bg="blue">
                <Container>
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Store">Store</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Button href="#Cart" onClick={toggleCart}>
                        Cart<Badge bg="success">{cartItems.length}</Badge>
                    </Button>
                </Container>
            </Navbar>
            <Heading />
            {showCart && <Cart />}
            <Products />
        </div>
    );
}

export default NavbarFile;
