import { Fragment, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Classes from './Authentication.module.scss';

import BaseCard from '../components/base/BaseCard';
import BaseButton from '../components/base/BaseButton';

const Authentication = () => {
  const navigate = useNavigate();
  const emailInput = useRef();
  const passwordInput = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const API_KEY = 'AIzaSyCfILVsJgXoj6YygpYtIs_GiLsiJMfxZ8w';

  const switchAuthModeHandler = () => {
    setIsLogin((previousState) => !previousState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    // optional: validation here...

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        // Navigate
        if (isLogin) navigate('/dashboard');

        if (!isLogin) {
          // Show success message
          // Switch to isLogin
        }
      } else {
        return res.json().then((data) => {
          // show error modal
          console.log(data);
          // further error handling
        });
      }
    });

    console.log('...');
  };

  return (
    <Fragment>
      <h1>Hello, Spearny</h1>
      <form className="h-grid" onSubmit={submitHandler}>
        <BaseCard mode="form-control" background="light">
          <input type="email" placeholder="E-Mailaddress..." ref={emailInput} />
        </BaseCard>
        <BaseCard mode="form-control" background="light">
          <input
            type="password"
            placeholder="Password..."
            ref={passwordInput}
          />
        </BaseCard>
        <BaseButton priority="primary">
          {isLogin ? 'Login' : 'Sign up'}
        </BaseButton>
      </form>
      <BaseButton
        priority="primary"
        mode="link"
        onClick={switchAuthModeHandler}
      >
        {isLogin ? 'Sign up' : 'Login'} instead
      </BaseButton>
    </Fragment>
  );
};

export default Authentication;
