import { useSelector } from 'react-redux';
import MovementAddForm from './MovementAddForm';
import Movement from './Movement';

const Movements = () => {
  const movements = useSelector((state) => state.movements.movements);

  return (
    <div className="h-grid">
      <MovementAddForm />
      <div className="h-grid-gap-small">
        {movements.map((movement) => (
          <Movement movement={movement} key={movement.id} />
        ))}
      </div>
    </div>
  );
};

export default Movements;
