import React from 'react';
import './App.css';
import NavbarFile from './components/NavbarFile';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavbarFile/>
      </CartProvider>
    </div>
  );
}

export default App;

