import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { updateMovement } from '../../store/movements-actions';
import './Movement.scss';
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
import MovementIsRegular from './details/MovementIsRegular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Movement = (props) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(props.showDetails);
  const {
    id,
    type,
    title,
    amount,
    description,
    isRegular,
    tags,
    paidTo,
    paidBy,
    receivedFrom,
    receivedBy,
  } = props.movement;

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
    <div className="v-grid-space-between-no-wrap w-100">
      <h3 className="movement__title">{title}</h3>
      <div>
        <span className={`movement--type-${type} v-grid-gap-small`}>
          {amount}€
          {isRegular && <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />}
        </span>
      </div>
    </div>
  );

  const expenseOnlyMarkup = (
    <Fragment>
      <MovementPaidTo id={id} initialValue={paidTo} />
      <MovementPaidBy id={id} initialValue={paidBy} />
    </Fragment>
  );

  const incomeOnlyMarkup = (
    <Fragment>
      <MovementReceivedFrom id={id} initialValue={receivedFrom} />
      <MovementReceivedBy id={id} initialValue={receivedBy} />
    </Fragment>
  );

  const detailsMarkup = (
    <div className="h-grid movement__details">
      <div className="v-grid-gap-small">
        <MovementType id={id} initialValue={type} />
        <MovementTitle id={id} initialValue={title} />
        <MovementAmount id={id} type={type} initialValue={amount} />
      </div>
      <MovementDescription id={id} description={description} />
      <MovementIsRegular id={id} isRegular={isRegular} />
      <MovementTags id={id} tags={tags} />
      {type === 'expense' && expenseOnlyMarkup}
      {type === 'income' && incomeOnlyMarkup}
      <div className="movement__actions v-grid-gap-small-centered">
        <MovementDelete id={id} />
      </div>
    </div>
  );

  return (
    <BaseCard className="movement" background="light">
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
