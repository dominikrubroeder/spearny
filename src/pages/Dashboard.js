import { Fragment } from 'react';
import Movements from '../components/movements/Movements';
import Tags from '../components/tags/Tags';

const Dashboard = () => {
  return (
    <Fragment>
      <h1>Hello, Dashboard</h1>
      <Movements />
      <Tags />
    </Fragment>
  );
};

export default Dashboard;
