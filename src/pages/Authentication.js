import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import BaseCard from '../components/base/BaseCard';
import BaseButton from '../components/base/BaseButton';

const Authentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false);
  const [enteredEmailWasInitial, setEnteredEmailWasInitial] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');

  const checkAuth = (e) => {
    e.preventDefault();
    console.log('Authenticating...');
    if (enteredEmail.trim() === '' || enteredPassword.trim() === '') return;
    setIsAuthenticated(true);
  };

  const handleEnteredEmail = (e) => {
    const inputValue = e.target.value;
    setEnteredEmail(inputValue);
    // checkAuth(e);

    // Check if it was just the first click to the input field
    if (enteredEmailWasInitial) {
      setEnteredEmailWasInitial(false);
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
      setEnteredEmailWasTouched(true);
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredEmailIsValid(true);
    setEnteredEmailWasTouched(true);
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
            value={enteredEmail}
            placeholder="E-Mailaddress..."
            onFocus={handleEnteredEmail}
            onBlur={handleEnteredEmail}
            onChange={handleEnteredEmail}
          />
        </BaseCard>
        {enteredEmailWasTouched && !enteredEmailIsValid && (
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
