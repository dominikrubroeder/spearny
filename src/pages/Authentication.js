import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import BaseCard from '../components/base/BaseCard';
import BaseButton from '../components/base/BaseButton';

const Authentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredEmailState, setEnteredEmailState] = useState({
    value: '',
    isValid: false,
    wasTouched: false,
    wasInitial: true,
  });
  const [enteredPassword, setEnteredPassword] = useState('');

  const checkAuth = (e) => {
    e.preventDefault();
    console.log('Authenticating...');
    if (enteredEmailState.value.trim() === '' || enteredPassword.trim() === '')
      return;
    setIsAuthenticated(true);
  };

  const handleEnteredEmail = (e) => {
    const inputValue = e.target.value;
    setEnteredEmailState((prevState) => {
      return { ...prevState, value: inputValue };
    });

    // Check if it was just the first click to the input field without entering characters
    if (setEnteredEmailState.wasInitial) {
      setEnteredEmailState((prevState) => {
        return { ...prevState, wasInitial: false };
      });
      return;
    }

    // Only validate further when user added more than 5 characters
    if (inputValue.length < 5) {
      return;
    }

    if (
      inputValue === '' ||
      !inputValue.includes('@') ||
      !inputValue.includes('.')
    ) {
      setEnteredEmailState((prevState) => {
        return { ...prevState, isValid: false, wasTouched: true };
      });
      return;
    }
    setEnteredEmailState((prevState) => {
      return { ...prevState, isValid: true };
    });
  };

  const handleEnteredPassword = (e) => {
    setEnteredPassword(e.target.value);
    checkAuth(e);
  };

  return (
    <Fragment>
      <h1>Hello, Spearny</h1>
      <form className="h-grid" onSubmit={checkAuth}>
        <BaseCard mode="form-control" background="light">
          <input
            type="email"
            value={setEnteredEmailState.value}
            placeholder="E-Mailaddress..."
            onFocus={handleEnteredEmail}
            onBlur={handleEnteredEmail}
            onChange={handleEnteredEmail}
          />
        </BaseCard>
        {enteredEmailState.wasTouched && !enteredEmailState.isValid && (
          <p>Please enter a valid e-mail address.</p>
        )}
        <BaseCard mode="form-control" background="light">
          <input
            type="password"
            value={enteredPassword}
            placeholder="Password..."
            onChange={handleEnteredPassword}
          />
        </BaseCard>
      </form>
      <Link to="/dashboard">
        <BaseButton priority="primary" disabled={!isAuthenticated}>
          Login
        </BaseButton>
      </Link>
    </Fragment>
  );
};

export default Authentication;
