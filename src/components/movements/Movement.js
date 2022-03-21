import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import classes from './Movement.module.scss';
import BaseDropdown from '../base/BaseDropdown';
import BaseCard from '../base/BaseCard';
import MovementType from './details/MovementType';
import MovementTitle from './details/MovementTitle';
import MovementAmount from './details/MovementAmount';
import MovementDescription from './details/MovementDescription';
import MovementTags from './details/MovementTags';
import MovementPaidTo from './details/type-expense/MovementPaidTo';
import MovementPaidBy from './details/type-expense/MovementPaidBy';
import MovementReceivedFrom from './details/type-income/MovementReceivedFrom';
import MovementReceivedBy from './details/type-income/MovementReceivedBy';

const Movement = (props) => {
  const dispatch = useDispatch();
  const id = props.movement.id;
  const typeclasses =
    props.movement.type === 'expense'
      ? classes['type--expense']
      : classes['type--income'];

  const plusMinus = props.movement.type === 'expense' ? '-' : '+';
  const [showDetails, setShowDetails] = useState(props.movement.showDetails);

  const toggleDetails = () => {
    setShowDetails((previousState) => {
      return !previousState;
    });
  };

  const headMarkup = (
    <div className="v-grid-space-between w-100">
      <h3 onClick={toggleDetails}>{props.movement.title}</h3>
      <div className={classes.amount}>
        {plusMinus} {props.movement.amount}€
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
    <div className="h-grid">
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
    </div>
  );

  return (
    <BaseCard classes={`${classes.movement} ${typeclasses}`} background="light">
      <BaseDropdown isOpen={showDetails} head={headMarkup}>
        {detailsMarkup}
      </BaseDropdown>
    </BaseCard>
  );
};

export default Movement;
