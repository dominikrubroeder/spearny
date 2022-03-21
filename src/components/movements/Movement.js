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
  const [editMode, setEditMode] = useState(props.movement.editMode);
  const [type, setType] = useState(props.movement.type);
  const [title, setTitle] = useState(props.movement.title);
  const [amount, setAmount] = useState(props.movement.amount);
  const [description, setDescription] = useState(props.movement.description);
  const [tags, setTags] = useState(props.movement.tags);
  const [paidBy, setPaidBy] = useState(props.movement.paidBy);
  const [paidTo, setPaidTo] = useState(props.movement.paidTo);
  const [receivedBy, setReceivedBy] = useState(props.movement.receivedBy);
  const [receivedFrom, setReceivedFrom] = useState(props.movement.receivedFrom);

  const toggleDetails = () => {
    setShowDetails((previousState) => {
      return !previousState;
    });

    setEditMode(() => false);
  };

  const enableEditMode = () => {
    setEditMode(() => true);
  };

  const typeOnChangeHandler = (e) => {
    setType(() => {
      return e.target.value;
    });
  };

  const titleOnChangeHandler = (e) => {
    setTitle(() => {
      return e.target.value;
    });
  };

  const amountOnChangeHandler = (e) => {
    setAmount(() => {
      return e.target.value;
    });
  };

  const descriptionOnChangeHandler = (e) => {
    setDescription(() => {
      return e.target.value;
    });
  };

  const tagsOnChangeHandler = (e) => {
    setTags(() => {
      return e.target.value.replace(' ', '').split(',');
    });
  };

  const paidByOnChangeHandler = (e) => {
    setPaidBy(() => {
      return e.target.value;
    });
  };

  const paidToOnChangeHandler = (e) => {
    setPaidTo(() => {
      return e.target.value;
    });
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: e.target.value,
      })
    );
  };

  const receivedByOnChangeHandler = (e) => {
    setReceivedBy(() => {
      return e.target.value;
    });
  };

  const receivedFromOnChangeHandler = (e) => {
    setReceivedFrom(() => {
      return e.target.value;
    });
  };

  const headMarkup = (
    <div className="v-grid-space-between w-100">
      <h3 onClick={toggleDetails}>{title}</h3>
      <div className={classes.amount}>
        {plusMinus} {amount}€
      </div>
    </div>
  );

  const descriptionMarkup = (
    <BaseDropdown head={<label>Notes:</label>} hasToggle={true}>
      <BaseCard background="white" isLabel={true}>
        <textarea
          rows="3"
          value={description}
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
        helpText="Paid to help text"
      >
        <BaseCard background="white" isLabel={true}>
          <select
            value={paidTo}
            placeholder="To whom did I make the payment?"
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
        helpText="Paid by help text"
      >
        <BaseCard background="white" isLabel={true}>
          <select
            type="text"
            value={paidBy}
            placeholder="Which payment method did I use to make the payment?"
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
        helpText="Received from help text"
      >
        <BaseCard background="white" isLabel={true}>
          <input
            type="text"
            value={receivedFrom}
            placeholder="From whom did I receive this payment?"
            onChange={receivedFromOnChangeHandler}
          />
        </BaseCard>
      </BaseDropdown>
      <BaseDropdown
        head={<label>Received by:</label>}
        hasToggle={true}
        helpTitle="Received by"
        helpText="Received by help text"
      >
        <BaseCard background="white" isLabel={true}>
          <input
            type="text"
            value={receivedBy}
            placeholder="By which payment method did I receive this payment?"
            onChange={receivedByOnChangeHandler}
          />
        </BaseCard>
      </BaseDropdown>
    </Fragment>
  );

  const detailsMarkup = (
    <div className={`h-grid ${editMode ? 'edit-mode' : ''}`}>
      <div className="v-grid-gap-small">
        {editMode && (
          <BaseCard background="white" isLabel={true}>
            <select value={type} onChange={typeOnChangeHandler}>
              <option value="income">+</option>
              <option value="expense">-</option>
            </select>
          </BaseCard>
        )}
        {editMode && (
          <BaseCard
            classes="v-grid-item-expand"
            background="white"
            isLabel={true}
          >
            <input
              type="text"
              value={title}
              placeholder="Add title..."
              onChange={titleOnChangeHandler}
            />
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
            <input
              type="text"
              value={amount}
              placeholder="Amount value"
              onChange={amountOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
      {descriptionMarkup}
      {tagsMarkup}
      {type === 'expense' && expenseOnlyMarkup}
      {type === 'income' && incomeOnlyMarkup}
    </div>
  );

  return (
    <BaseCard classes={`${classes.movement} ${typeclasses}`} background="light">
      <BaseDropdown
        isOpen={showDetails}
        head={headMarkup}
        editModeState={editMode}
        onEdit={enableEditMode}
        onDone={toggleDetails}
      >
        {detailsMarkup}
      </BaseDropdown>
    </BaseCard>
  );
};

export default Movement;
