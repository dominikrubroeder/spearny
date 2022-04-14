import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseButton from '../../../base/BaseButton';

const MovementDelete = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const deleteMovement = () => {
    dispatch(movementsActions.delete(id));
  };

  return (
    <BaseButton
      mode="text"
      priority="primary"
      ofType="destructive"
      onClick={deleteMovement}
    >
      Delete
    </BaseButton>
  );
};

export default MovementDelete;
