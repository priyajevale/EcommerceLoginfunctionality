import { Link } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Store/Auth-Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authctx=useContext(AuthContext);

  const isLoggedIn = authctx.isLoggedIn;
  const logoutHandler = ()=>{
    authctx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
<li>
<Link to='/auth'>Login</Link>
</li>
          )}
          {isLoggedIn && (
             <li>
             <Link to='/profile'>Profile</Link>
           </li>
          )}
          {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;