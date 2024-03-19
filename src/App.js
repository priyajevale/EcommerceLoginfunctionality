// import React from 'react';
// import './App.css';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NavbarFile from './components/NavbarFile';
// import { CartProvider } from './components/CartContext';

// function App() {
//   return (
//     <div className="App">
//       <CartProvider>
//         <NavbarFile/>
//       </CartProvider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarFile from './components/NavbarFile';
import AboutPage from './components/About'; // Import your AboutPage component
import { CartProvider } from './components/CartContext';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavbarFile />
          <Routes>
          <Route path="/" element={<Home />} />
            {/* <Route path="/store" component={HomePage} /> */}
            <Route path='/about' element={<AboutPage />} /> {/* Set up the About route */}
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;