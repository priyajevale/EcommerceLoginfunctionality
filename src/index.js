import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './components/Store/Auth-Context';
import { BrowserRouter } from 'react-router-dom';

// Create a root instance using createRoot from "react-dom/client"
const root = createRoot(document.getElementById('root'));

// Use the root instance to render your application
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import React from 'react';
// import './index.css';
// import App from './App';
// import { AuthContextProvider } from './components/Store/Auth-Context';

// ReactDOM.render(
//   <AuthContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </AuthContextProvider>,
//   document.getElementById('root')
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// import "../node_modules/react-bootstrap/dist/react-bootstrap";

// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './components/Store/Auth-Context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <AuthContextProvider>
//     <App />
//   </AuthContextProvider>
//   </BrowserRouter>
// );