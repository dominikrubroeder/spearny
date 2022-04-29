import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
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
    dispatch(fetchPaymentMethods());
    dispatch(fetchPaymentPartners());
  }, [dispatch]);

  useEffect(() => {
    dispatch(movementsActions.sort(sortingMode));
  }, [sortingMode, dispatch]);

  return (
    <ul
      className="movement-list"
      list-mode={listMode}
      sorting-mode={sortingMode}
      filter={filter}
    >
      {movementsExists &&
        movements.map((movement, i) => {
          if (movement.isVisible) {
            return (
              <motion.li
                key={movement.id}
                animate={{ opacity: [0, 1], y: [10, 0] }}
                exit={{ opacity: [1, 0] }}
                transition={{ ease: 'easeOut', duration: 0.4, delay: i * 0.04 }}
              >
                <Movement movement={movement} />
              </motion.li>
            );
          } else {
            return <li>No movement found! Add one. :-)</li>;
          }
        })}
    </ul>
  );
};

export default MovementList;
