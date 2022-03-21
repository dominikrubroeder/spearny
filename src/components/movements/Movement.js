import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import classes from './Movement.module.scss';
import BaseDropdown from '../base/BaseDropdown';
import BaseCard from '../base/BaseCard';
import TagsList from '../tags/TagsList';

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

  const typeOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'type',
        updatedValue: e.target.value,
      })
    );
  };

  const titleOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'title',
        updatedValue: e.target.value,
      })
    );
  };

  const amountOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'amount',
        updatedValue: +e.target.value,
      })
    );
  };

  const descriptionOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'description',
        updatedValue: e.target.value,
      })
    );
  };

  const tagsOnChangeHandler = (e) => {
    // setTags(() => {
    //   return e.target.value.replace(' ', '').split(',');
    // });
  };

  const paidByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'paidBy',
        updatedValue: e.target.value,
      })
    );
  };

  const paidToOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: e.target.value,
      })
    );
  };

  const receivedByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'receivedBy',
        updatedValue: e.target.value,
      })
    );
  };

  const receivedFromOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'receivedFrom',
        updatedValue: e.target.value,
      })
    );
  };

  const headMarkup = (
    <div className="v-grid-space-between w-100">
      <h3 onClick={toggleDetails}>{props.movement.title}</h3>
      <div className={classes.amount}>
        {plusMinus} {props.movement.amount}€
      </div>
    </div>
  );

  const descriptionMarkup = (
    <BaseDropdown
      head={<label>Notes:</label>}
      hasToggle={true}
      isOpen={props.movement.description && true}
    >
      <BaseCard background="white" isLabel={true}>
        <textarea
          rows="3"
          value={props.movement.description}
          placeholder="Some notes..."
          onChange={descriptionOnChangeHandler}
        />
      </BaseCard>
    </BaseDropdown>
  );

  const tagsMarkup = (
    <BaseDropdown
      head={<label>Tags:</label>}
      hasToggle={true}
      helpTitle="Tags"
      helpText="Tags help text"
      isOpen={props.movement.tags && true}
    >
      <TagsList tagBackground="white" />
      {/* {!editMode && (
        <span className="v-grid-gap-small">
          {tags.map((tag) => (
            <BaseCard key={tag} isLabel={true} background="white">
              {tag}
            </BaseCard>
          ))}
        </span>
      )}
      {editMode && (
        <BaseCard background="white" isLabel={true}>
          <input
            value={tags.join(', ')}
            onChange={tagsOnChangeHandler}
            placeholder="How do i categorize this movement? (comma seperated values like: Food, Zalando)"
          />
        </BaseCard>
      )} */}
    </BaseDropdown>
  );

  const expenseOnlyMarkup = (
    <Fragment>
      <BaseDropdown
        head={<label>Paid to:</label>}
        hasToggle={true}
        helpTitle="Paid to"
        helpText="To whom did I make the payment?"
        isOpen={props.movement.paidTo && true}
      >
        <BaseCard background="white" isLabel={true}>
          <select
            value={props.movement.paidTo}
            onChange={paidToOnChangeHandler}
          >
            <option value="Zalando GmbH">Zalando GmbH</option>
            <option value="Luca Walther">Luca Walther</option>
            <option value="Patrick Rubroeder">Patrick Rubröder</option>
            <option value="Apple Inc.">Apple Inc.</option>
            <option value="Starbucks">Starbucks</option>
            <option value="Restaurant Il Soprano">Restaurant Il Soprano</option>
            <option value="Amazon.com Inc.">Amazon.com Inc.</option>
          </select>
        </BaseCard>
      </BaseDropdown>
      <BaseDropdown
        head={<label>Paid by:</label>}
        hasToggle={true}
        helpTitle="Paid by"
        helpText="Which payment method did I use to make the payment?"
        isOpen={props.movement.paidBy}
      >
        <BaseCard background="white" isLabel={true}>
          <select
            value={props.movement.paidBy}
            onChange={paidByOnChangeHandler}
          >
            <option value="Cash">Cash</option>
            <option value="PayPal">PayPal</option>
            <option value="invoice">By Invoice</option>
            <option value="VISA">VISA</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Klarna">Klarna</option>
            <option value="American Express">American Express</option>
          </select>
        </BaseCard>
      </BaseDropdown>
    </Fragment>
  );

  const incomeOnlyMarkup = (
    <Fragment>
      <BaseDropdown
        head={<label>Received from:</label>}
        hasToggle={true}
        helpTitle="Received from"
        helpText="From whom did I receive this payment?"
        isOpen={props.movement.receivedFrom}
      >
        <BaseCard background="white" isLabel={true}>
          <select
            value={props.movement.receivedFrom}
            onChange={receivedFromOnChangeHandler}
          >
            <option value="Zalando GmbH">Zalando GmbH</option>
            <option value="Luca Walther">Luca Walther</option>
            <option value="Patrick Rubroeder">Patrick Rubröder</option>
            <option value="Apple Inc.">Apple Inc.</option>
            <option value="Starbucks">Starbucks</option>
            <option value="Restaurant Il Soprano">Restaurant Il Soprano</option>
            <option value="Amazon.com Inc.">Amazon.com Inc.</option>
          </select>
        </BaseCard>
      </BaseDropdown>
      <BaseDropdown
        head={<label>Received by:</label>}
        hasToggle={true}
        helpTitle="Received by"
        helpText="By which payment method did I receive this payment"
        isOpen={props.movement.receivedBy}
      >
        <BaseCard background="white" isLabel={true}>
          <select
            value={props.movement.receivedBy}
            onChange={receivedByOnChangeHandler}
          >
            <option value="Cash">Cash</option>
            <option value="PayPal">PayPal</option>
            <option value="invoice">By Invoice</option>
            <option value="VISA">VISA</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Klarna">Klarna</option>
            <option value="American Express">American Express</option>
          </select>
        </BaseCard>
      </BaseDropdown>
    </Fragment>
  );

  const detailsMarkup = (
    <div className="h-grid">
      <div className="v-grid-gap-small">
        <BaseCard background="white" isLabel={true}>
          <select value={props.movement.type} onChange={typeOnChangeHandler}>
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
        </BaseCard>
        <BaseCard
          classes="v-grid-item-expand"
          background="white"
          isLabel={true}
        >
          <input
            type="text"
            value={props.movement.title}
            placeholder="Add title..."
            onChange={titleOnChangeHandler}
          />
        </BaseCard>
        <BaseCard background="white" isLabel={true}>
          <input
            type="text"
            value={props.movement.amount}
            placeholder="Amount value"
            onChange={amountOnChangeHandler}
          />
        </BaseCard>
      </div>
      {descriptionMarkup}
      {tagsMarkup}
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
