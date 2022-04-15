import Movements from '../components/movements/Movements';

const Dashboard = () => {
  return (
    <div className="container--compressed">
      <h1>Hello, Dashboard</h1>
      <div className="h-grid-gap-big">
        <Movements />
      </div>
    </div>
  );
};

export default Dashboard;
