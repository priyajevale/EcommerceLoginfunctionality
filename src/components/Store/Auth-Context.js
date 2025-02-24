
import React, { useState } from "react";

export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
const initalToken =localStorage.getItem('token');
    const [token, setToken] = useState(initalToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    };
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );

};