import { useState, useRef,useContext} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import { AuthContext } from '../Store/Auth-Context';
 import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history=useHistory();
  const emailInputRef= useRef();
  const passwordInputRef=useRef();
 const authctx=useContext(AuthContext);
 
  const [isLogin, setIsLogin] = useState(true);
const [isLoading,setIsLoading]=useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler =(event) =>{
    event.preventDefault();
const enteredEmail=emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

setIsLoading(true);

let url;
   if(isLogin){
url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI"

    }
    else{
   url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI'


     }
   fetch(url,
{
method:'POST',
body:JSON.stringify({
  email:enteredEmail,
  password:enteredPassword,
  returnSecureToken:true
}),
headers:{
  'Content-Type': 'application/json'
}
}).then(res =>{
  setIsLoading(false);
  if(res.ok){
return res.json();
  }else{
    res.json().then(data =>{
      let errorMessage='Authentication failed';
      // if(data && data.error && data.error.message){
      // errorMessage =data.error.message;
      // }
     
      throw new Error(errorMessage);
    });
  }
}).then(data =>{
   console.log(data);
   if(data &&data.idToken){
    authctx.login(data.idToken);
    history.replace('/');
}else{
    throw new Error ("Authentication failed: ID token not found")
   }
  
}).catch((err) =>{
  alert(err.message);
});
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form  onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
        {!isLoading &&<button>{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
// import React, { useState, useRef, useContext } from 'react';
// import { AuthContext } from '../Store/Auth-Context';
// import classes from './AuthForm.module.css';

// const AuthForm = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const authctx = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     setIsLoading(true);

//     let url;
//     if (isLogin) {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI';
//     } else {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI';
//     }

//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => {
//       setIsLoading(false);
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error("Authentication failed: Bad Request");
//       }
//     })
//     .then(data => {
//       console.log("Authentication successful:", data);
//       authctx.login(data.idToken);
//     })
//     .catch(error => {
//       console.error("Authentication error:", error);
//       alert("Authentication failed. Please check your credentials and try again.");
//     });
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password'>Your Password</label>
//           <input
//             type='password'
//             id='password'
//             required
//             ref={passwordInputRef}
//           />
//         </div>

//         <div className={classes.actions}>
//           {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
//           {isLoading && <p>Sending request...</p>}
//           <button
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;