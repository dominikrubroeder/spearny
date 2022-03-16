import { useState } from 'react';
import classes from './Movement.module.scss';
import BaseDropdown from '../base/BaseDropdown';
import BaseCard from '../base/BaseCard';

const Movement = (props) => {
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
    <div className={`${classes.head} ${editMode && 'edit-mode'}`}>
      <h3 className={classes.title} onClick={toggleDetails}>
        {title}
      </h3>
      <div className={classes.amount}>
        {plusMinus} {amount}€
      </div>
    </div>
  );

  const expenseOnlyMarkup = (
    <div className="h-grid-gap-small">
      <div className="v-grid-gap-small">
        <label>Paid to:</label>
        {!editMode && <BaseCard>{paidTo}</BaseCard>}
        {editMode && (
          <BaseCard
            title={
              <input
                type="text"
                value={paidTo}
                placeholder="To whom did I make the payment?"
                onChange={paidToOnChangeHandler}
              />
            }
          />
        )}
      </div>
      <div className="v-grid-gap-small">
        <label>Paid by:</label>
        {!editMode && <BaseCard>{paidBy}</BaseCard>}
        {editMode && (
          <BaseCard>
            <input
              type="text"
              value={paidBy}
              placeholder="Which payment method did I use to make the payment?"
              onChange={paidByOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
    </div>
  );

  const incomeOnlyMarkup = (
    <div className="h-grid-gap-small">
      <div className="v-grid-gap-small">
        <label>Received from:</label>
        {!editMode && <BaseCard>{receivedFrom}</BaseCard>}
        {editMode && (
          <BaseCard>
            <input
              type="text"
              value={receivedFrom}
              placeholder="From whom did I receive this payment?"
              onChange={receivedFromOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
      <div className="v-grid-gap-small">
        <label>Received by:</label>
        {!editMode && <BaseCard>{receivedBy}</BaseCard>}
        {editMode && (
          <BaseCard>
            <input
              type="text"
              value={receivedBy}
              placeholder="By which payment method did I receive this payment?"
              onChange={receivedByOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
    </div>
  );

  const tagsMarkup = (
    <div className="v-grid-gap-small">
      <label>Tags:</label>
      {!editMode && (
        <span className="v-grid-gap-small">
          {tags.map((tag) => (
            <BaseCard key={tag}>{tag}</BaseCard>
          ))}
        </span>
      )}
      {editMode && (
        <BaseCard>
          <input
            value={tags.join(', ')}
            onChange={tagsOnChangeHandler}
            placeholder="How do i categorize this movement? (comma seperated values like: Food, Zalando)"
          />
        </BaseCard>
      )}
    </div>
  );

  const descriptionMarkup = (
    <div className="v-grid-gap-small">
      <label>Notes:</label>
      {!editMode && <BaseCard>{description}</BaseCard>}
      {editMode && (
        <BaseCard>
          <textarea
            rows="3"
            value={description}
            placeholder="Some notes..."
            onChange={descriptionOnChangeHandler}
            autoFocus
          />
        </BaseCard>
      )}
    </div>
  );

  const detailsMarkup = (
    <div className={`h-grid-gap-small ${editMode ? 'edit-mode' : ''}`}>
      <div className="v-grid-gap-small">
        {editMode && (
          <BaseCard>
            <select value={type} onChange={typeOnChangeHandler}>
              <option value="income">+</option>
              <option value="expense">-</option>
            </select>
          </BaseCard>
        )}
        {editMode && (
          <BaseCard classes="v-grid-item-expand">
            <input
              type="text"
              value={title}
              placeholder="Add title..."
              onChange={titleOnChangeHandler}
            />
          </BaseCard>
        )}
        {editMode && (
          <BaseCard>
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
    <li className={`${classes.movement} ${typeclasses}`}>
      <BaseDropdown
        isOpen={showDetails}
        head={headMarkup}
        hasEditActions={true}
        editModeState={editMode}
        enableEditMode={enableEditMode}
        hideDetails={toggleDetails}
      >
        {detailsMarkup}
      </BaseDropdown>
    </li>
  );
};

export default Movement;
