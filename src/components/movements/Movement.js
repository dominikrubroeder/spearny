import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { updateMovement } from '../../store/movements-actions';
import classes from './Movement.module.scss';
import BaseDropdown from '../base/BaseDropdown';
import BaseCard from '../base/BaseCard';
import MovementType from './details/main/MovementType';
import MovementTitle from './details/main/MovementTitle';
import MovementAmount from './details/main/MovementAmount';
import MovementDescription from './details/MovementDescription';
import MovementTags from './details/MovementTags';
import MovementPaidTo from './details/type-expense/MovementPaidTo';
import MovementPaidBy from './details/type-expense/MovementPaidBy';
import MovementReceivedFrom from './details/type-income/MovementReceivedFrom';
import MovementReceivedBy from './details/type-income/MovementReceivedBy';
import MovementDelete from './details/actions/MovementDelete';

const Movement = (props) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(props.showDetails);
  const typeclasses =
    props.movement.type === 'expense'
      ? classes['type--expense']
      : classes['type--income'];

  const plusMinus = props.movement.type === 'expense' ? '-' : '+';

  const updateMovementHandler = (updatedMovement) => {
    // When movement details are not visible, return
    setShowDetails((previousState) => !previousState);
    if (!showDetails) return;

    // Compare: old / updated, only when differ than update

    console.log(props.movement);
    dispatch(movementsActions.update(props.movement));
    dispatch(updateMovement(props.movement));
  };

  const headMarkup = (
    <div className="v-grid-space-between w-100">
      <h3>{props.movement.title}</h3>
      <div>
        <span className={classes.amount}>
          {plusMinus} {props.movement.amount}€
        </span>
      </div>
    </div>
  );

  const expenseOnlyMarkup = (
    <Fragment>
      <MovementPaidTo
        id={props.movement.id}
        initialValue={props.movement.paidTo}
      />
      <MovementPaidBy
        id={props.movement.id}
        initialValue={props.movement.paidBy}
      />
    </Fragment>
  );

  const incomeOnlyMarkup = (
    <Fragment>
      <MovementReceivedFrom
        id={props.movement.id}
        initialValue={props.movement.receivedFrom}
      />
      <MovementReceivedBy
        id={props.movement.id}
        initialValue={props.movement.receivedBy}
      />
    </Fragment>
  );

  const detailsMarkup = (
    <div className={`h-grid ${classes.details}`}>
      <div className="v-grid-gap-small">
        <MovementType
          id={props.movement.id}
          initialValue={props.movement.type}
        />
        <MovementTitle
          id={props.movement.id}
          initialValue={props.movement.title}
        />
        <MovementAmount
          id={props.movement.id}
          initialValue={props.movement.amount}
        />
      </div>
      <MovementDescription
        id={props.movement.id}
        description={props.movement.description}
      />
      <MovementTags id={props.movement.id} tags={props.movement.tags} />
      {props.movement.type === 'expense' && expenseOnlyMarkup}
      {props.movement.type === 'income' && incomeOnlyMarkup}
      <div className={`${classes.actions} v-grid-gap-small-centered`}>
        <MovementDelete id={props.movement.id} />
      </div>
    </div>
  );

  return (
    <BaseCard
      className={`${classes.movement} ${typeclasses}`}
      background="light"
    >
      <BaseDropdown
        isOpen={showDetails}
        head={headMarkup}
        onClick={updateMovementHandler}
      >
        {detailsMarkup}
      </BaseDropdown>
    </BaseCard>
  );
};

export default Movement;
