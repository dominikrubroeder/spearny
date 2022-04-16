import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { fetchMovements } from '../../store/movements-actions';
import Movement from './Movement';
import './MovementList.scss';

const MovementList = (props) => {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.movements.movements);
  const movementsExists = movements.length > 0;
  const listMode = props.config.listMode;
  const sortingMode = props.config.sortingMode;

  /** useEffect() hook to only trigger this dispatch action once
   * the dispatch function will never change, so it won't recall this block again
   */
  useEffect(() => {
    dispatch(fetchMovements());
    dispatch(movementsActions.sort(sortingMode));
  }, [dispatch, sortingMode]);

  return (
    <div
      className="movement-list"
      list-mode={listMode}
      sorting-mode={sortingMode}
    >
      {movementsExists &&
        movements.map((movement) => (
          <Movement movement={movement} key={movement.id} />
        ))}
    </div>
  );
};

export default MovementList;
