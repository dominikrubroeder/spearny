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
      <div className="h-grid-gap-small">
        <label>Paid to:</label>
        {!editMode && (
          <BaseCard background="white" isLabel={true}>
            {paidTo}
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
            <input
              type="text"
              value={paidTo}
              placeholder="To whom did I make the payment?"
              onChange={paidToOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
      <div className="h-grid-gap-small">
        <label>Paid by:</label>
        {!editMode && (
          <BaseCard background="white" isLabel={true}>
            {paidBy}
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
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
      <div className="h-grid-gap-small">
        <label>Received from:</label>
        {!editMode && (
          <BaseCard background="white" isLabel={true}>
            {receivedFrom}
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
            <input
              type="text"
              value={receivedFrom}
              placeholder="From whom did I receive this payment?"
              onChange={receivedFromOnChangeHandler}
            />
          </BaseCard>
        )}
      </div>
      <div className="h-grid-gap-small">
        <label>Received by:</label>
        {!editMode && (
          <BaseCard background="white" isLabel={true}>
            {receivedBy}
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
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
    <div className="h-grid-gap-small">
      <label>Tags:</label>
      {!editMode && (
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
      )}
    </div>
  );

  const descriptionMarkup = (
    <div className="h-grid-gap-small">
      <BaseDropdown
        isOpen={description && true}
        head={<label>Notes:</label>}
        editModeState={editMode}
        hasToggle={true}
        toggleEnabled={description && true}
        hasHelpText={true}
      >
        {!editMode && (
          <BaseCard background="white" isLabel={true}>
            {description}
          </BaseCard>
        )}
        {editMode && (
          <BaseCard background="white" isLabel={true}>
            <textarea
              rows="3"
              value={description}
              placeholder="Some notes..."
              onChange={descriptionOnChangeHandler}
              autoFocus
            />
          </BaseCard>
        )}
      </BaseDropdown>
    </div>
  );

  const detailsMarkup = (
    <div className={`h-grid-gap-small ${editMode ? 'edit-mode' : ''}`}>
      <div className="h-grid-gap-small">
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
        hasEditActions={true}
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
