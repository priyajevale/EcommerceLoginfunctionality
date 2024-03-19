// import React, { useState, useContext } from 'react';
// import { Nav, Navbar,NavLink, Container, Badge, Button } from 'react-bootstrap';
// import { CartContext } from './CartContext';
// import Heading from './Heading';
// import Products from './Products';
// import Cart from './Cart';

// const NavbarFile = () => {
//     const [showCart, setShowCart] = useState(false);
//     const { cartItems } = useContext(CartContext);

//     const toggleCart = () => {
//         setShowCart(!showCart);
//     };

//     return (
//         <div>
//             <Navbar variant="dark" expand="sm" bg="blue">
//                 <Container>
//                     <Nav.Link href="#Home">Home</Nav.Link>
//                     <Nav.Link href="#Store">Store</Nav.Link>
//                     <Nav.Link as={NavLink} to="/about">About</Nav.Link> 
//                     <Button href="#Cart" onClick={toggleCart}>
//                         Cart<Badge bg="success">{cartItems.length}</Badge>
//                     </Button>
//                 </Container>
//             </Navbar>
//             <Heading />
//             {showCart && <Cart />}
//             <Products />
//         </div>
//     );
// }

// export default NavbarFile;
import React, { useState, useContext } from 'react';
import { Nav, Navbar, NavLink, Container, Badge, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Heading from './Heading';

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
                    <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link instead of href */}
                    <Nav.Link as={Link} to="/store">Store</Nav.Link> {/* Use Link instead of href */}
                    <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Use Link instead of href */}
                    {/* <Button as={Link} to="/cart" onClick={toggleCart}> 
                        Cart<Badge bg="success">{cartItems.length}</Badge>
                    </Button> */}
                </Container>
            </Navbar>
            <Heading />
            {/* Render the cart and products components based on showCart state */}
        </div>
    );
}

export default NavbarFile;