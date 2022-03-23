import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovements } from '../../store/movements-actions';
import Movement from './Movement';

const MovementList = () => {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.movements.movements);
  const movementsExists = movements.length > 0;

  /** useEffect() hook to only trigger this dispatch action once
   * the dispatch function will never change, so it won't recall this block again
   */
  useEffect(() => {
    dispatch(fetchMovements());
  }, [dispatch]);

  return (
    <div className="h-grid-gap-small">
      {movementsExists &&
        movements.map((movement) => (
          <Movement movement={movement} key={movement.id} />
        ))}
    </div>
  );
};

export default MovementList;
