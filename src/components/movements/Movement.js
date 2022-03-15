import { useState } from 'react';
import styles from './Movement.module.scss';
import BaseDropdown from '../BaseDropdown';
import BaseLabel from '../BaseLabel';

const Movement = (props) => {
  const typeStyles =
    props.movement.type === 'expense'
      ? styles['type--expense']
      : styles['type--income'];

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
    <div className={`${styles.head} ${editMode && 'edit-mode'}`}>
      {!editMode && (
        <h3 className={styles.title} onClick={toggleDetails}>
          {title}
        </h3>
      )}
      {editMode && (
        <BaseLabel
          title={
            <input
              type="text"
              value={title}
              placeholder="Add title..."
              onChange={titleOnChangeHandler}
              autoFocus
            />
          }
        />
      )}
      {!editMode && (
        <div className={styles.amount}>
          {plusMinus} {amount}€
        </div>
      )}
      {editMode && (
        <BaseLabel
          title={
            <select value={type} onChange={typeOnChangeHandler}>
              <option value="income">+</option>
              <option value="expense">-</option>
            </select>
          }
        />
      )}
      {editMode && (
        <BaseLabel
          title={
            <input
              type="text"
              value={amount}
              placeholder="Amount value"
              onChange={amountOnChangeHandler}
            />
          }
        />
      )}
    </div>
  );

  const expenseOnlyMarkup = (
    <div className="h-grid-gap-small">
      <div className="v-grid-gap-small">
        <label>Paid to:</label>
        {!editMode && <BaseLabel title={paidTo} />}
        {editMode && (
          <BaseLabel
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
        {!editMode && <BaseLabel title={paidBy} />}
        {editMode && (
          <BaseLabel
            title={
              <input
                type="text"
                value={paidBy}
                placeholder="Which payment method did I use to make the payment?"
                onChange={paidByOnChangeHandler}
              />
            }
          />
        )}
      </div>
    </div>
  );

  const incomeOnlyMarkup = (
    <div className="h-grid-gap-small">
      <div className="v-grid-gap-small">
        <label>Received from:</label>
        {!editMode && <BaseLabel title={receivedFrom} />}
        {editMode && (
          <input
            type="text"
            value={receivedFrom}
            placeholder="From whom did I receive this payment?"
            onChange={receivedFromOnChangeHandler}
          />
        )}
      </div>
      <div className="v-grid-gap-small">
        <label>Received by:</label>
        {!editMode && <BaseLabel title={receivedBy} />}
        {editMode && (
          <input
            type="text"
            value={receivedBy}
            placeholder="By which payment method did I receive this payment?"
            onChange={receivedByOnChangeHandler}
          />
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
            <BaseLabel key={tag} title={tag} />
          ))}
        </span>
      )}
      {editMode && (
        <BaseLabel
          title={
            <input
              value={tags.join(', ')}
              onChange={tagsOnChangeHandler}
              placeholder="How do i categorize this movement? (comma seperated values like: Food, Zalando)"
            />
          }
        />
      )}
    </div>
  );

  const descriptionMarkup = (
    <div className="v-grid-gap-small">
      <label>Notes:</label>
      {!editMode && <BaseLabel title={description} />}
      {editMode && (
        <BaseLabel
          title={
            <textarea
              rows="3"
              value={description}
              placeholder="Some notes..."
              onChange={descriptionOnChangeHandler}
            />
          }
        />
      )}
    </div>
  );

  const detailsMarkup = (
    <div className={`h-grid-gap-small ${editMode ? 'edit-mode' : ''}`}>
      {descriptionMarkup}
      {tagsMarkup}
      {type === 'expense' && expenseOnlyMarkup}
      {type === 'income' && incomeOnlyMarkup}
    </div>
  );

  return (
    <li className={`${styles.movement} ${typeStyles}`}>
      <BaseDropdown
        isOpen={showDetails}
        head={headMarkup}
        content={detailsMarkup}
        hasEditActions={true}
        editModeState={editMode}
        enableEditMode={enableEditMode}
        hideDetails={toggleDetails}
      />
    </li>
  );
};

export default Movement;
