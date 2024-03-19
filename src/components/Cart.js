// import React, { useState } from 'react';

// const Cart = () => {
//   const cartElements = [
//     {
//       title: 'Colors',
//       price: 100,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       quantity: 2,
//     },
//     {
//       title: 'Black and white Colors',
//       price: 50,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       quantity: 3,
//     },
//     {
//       title: 'Yellow and Black Colors',
//       price: 70,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       quantity: 1,
//     }
//   ];

//   const [cartItems, setCartItems] = useState(cartElements);

// //   const removeFromCart = (index) => {
// //     const updatedCartItems = [...cartItems];
// //     updatedCartItems.splice(index, 1);
// //     setCartItems(updatedCartItems);
// //   };

//   return (
//     <div className="cart">
//       {/* <h2>Cart</h2> */}
//       <button>Cart</button>
//       {cartItems.map((item, index) => (
//         <div className="cart-item" key={index}>
//           <img src={item.imageUrl} alt={item.title} />
//           <div>
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             {/* <button onClick={() => removeFromCart(index)}>Remove</button> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Filter cart items to only include items with quantity greater than 0
  const cartItemsFiltered = cartItems.filter(item => item.quantity > 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItemsFiltered.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;