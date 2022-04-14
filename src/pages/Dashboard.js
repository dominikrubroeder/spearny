import Movements from '../components/movements/Movements';
import Tags from '../components/tags/Tags';

const Dashboard = () => {
  return (
    <div className="container--compressed">
      <h1>Hello, Dashboard</h1>
      <div className="h-grid-gap-big">
        <Movements />
        <Tags />
      </div>
    </div>
  );
};

export default Dashboard;
