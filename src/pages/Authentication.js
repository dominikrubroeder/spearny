import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BaseButton from '../components/base/BaseButton';

const Authentication = () => {
  return (
    <Fragment>
      <h1>Hello, Spearny</h1>
      <Link to="/dashboard">
        <BaseButton priority="primary">Login</BaseButton>
      </Link>
    </Fragment>
  );
};

export default Authentication;
