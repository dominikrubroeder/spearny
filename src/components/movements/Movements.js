import { useSelector } from 'react-redux';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';

const Movements = () => {
  return (
    <div className="h-grid">
      <MovementAddForm />
      <MovementList />
    </div>
  );
};

export default Movements;
