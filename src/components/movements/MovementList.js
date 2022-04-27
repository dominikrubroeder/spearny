import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { movementsActions } from '../../store/movements';
import { fetchMovements } from '../../store/movements-actions';
import { fetchPaymentMethods } from '../../store/payment-methods-actions';
import { fetchPaymentPartners } from '../../store/payment-partner-actions';
import Movement from './Movement';
import './MovementList.scss';

const MovementList = (props) => {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.movements.movements);
  const movementsExists = movements.length > 0;
  const listMode = props.config.list;
  const sortingMode = props.config.sorting;
  const filter = props.config.filter;

  /** useEffect() hook to only trigger this dispatch action once
   * the dispatch function will never change, so it won't recall this block again
   */
  useEffect(() => {
    dispatch(fetchMovements());
    dispatch(movementsActions.sort(sortingMode));
    dispatch(fetchPaymentMethods());
    dispatch(fetchPaymentPartners());
  }, [dispatch]);

  return (
    <TransitionGroup
      className="movement-list"
      list-mode={listMode}
      sorting-mode={sortingMode}
      filter={filter}
    >
      {movementsExists &&
        movements.map((movement) => {
          if (movement.isVisible) {
            return (
              <CSSTransition key={movement.id} classNames="fade" timeout={400}>
                <Movement movement={movement} />
              </CSSTransition>
            );
          }
        })}
    </TransitionGroup>
  );
};

export default MovementList;
