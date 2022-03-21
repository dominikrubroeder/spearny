import { useSelector } from 'react-redux';
import Movement from './Movement';

const MovementList = () => {
  const movements = useSelector((state) => state.movements.movements);

  return (
    <div className="h-grid-gap-small">
      {movements.map((movement) => (
        <Movement movement={movement} key={movement.id} />
      ))}
    </div>
  );
};

export default MovementList;
