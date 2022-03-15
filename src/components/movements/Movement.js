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
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
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
        <input type="text" value={title} onChange={titleOnChangeHandler} />
      )}
      {!editMode && (
        <div className={styles.amount}>
          {plusMinus} {amount}€
        </div>
      )}
      {editMode && (
        <select value={type} onChange={typeOnChangeHandler}>
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>
      )}
      {editMode && (
        <input type="text" value={amount} onChange={amountOnChangeHandler} />
      )}
    </div>
  );

  const expenseOnlyMarkup = (
    <div className="h-grid-gap-small">
      {!editMode && (
        <div>
          Paid to: <BaseLabel title={paidTo} />
        </div>
      )}
      {editMode && (
        <input type="text" value={paidTo} onChange={paidToOnChangeHandler} />
      )}
      {!editMode && (
        <div>
          Paid by: <BaseLabel title={paidBy} />
        </div>
      )}
      {editMode && (
        <input type="text" value={paidBy} onChange={paidByOnChangeHandler} />
      )}
    </div>
  );

  const incomeOnlyMarkup = (
    <div className="h-grid-gap-small">
      {!editMode && (
        <div>
          Received from: <BaseLabel title={receivedFrom} />
        </div>
      )}
      {editMode && (
        <input
          type="text"
          value={receivedFrom}
          onChange={receivedFromOnChangeHandler}
        />
      )}
      {!editMode && (
        <div>
          Received by: <BaseLabel title={receivedBy} />
        </div>
      )}
      {editMode && (
        <input
          type="text"
          value={receivedBy}
          onChange={receivedByOnChangeHandler}
        />
      )}
    </div>
  );

  const tagsMarkup = (
    <div>
      {!editMode && (
        <div className="v-grid-gap-small">
          Tags:
          <span className="v-grid-gap-small">
            {tags.map((tag) => (
              <BaseLabel key={tag} title={tag} />
            ))}
          </span>
        </div>
      )}
      {editMode && (
        <input value={tags.join(', ')} onChange={tagsOnChangeHandler} />
      )}
    </div>
  );

  const descriptionMarkup = (
    <div>
      {!editMode && (
        <div>
          Notes: <BaseLabel title={description} />
        </div>
      )}
      {editMode && (
        <textarea
          rows="3"
          value={description}
          onChange={descriptionOnChangeHandler}
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
    <div className={`${styles.movement} ${typeStyles}`}>
      <BaseDropdown
        isOpen={showDetails}
        head={headMarkup}
        content={detailsMarkup}
        hasEditActions={true}
        editModeState={editMode}
        enableEditMode={enableEditMode}
        hideDetails={toggleDetails}
      />
    </div>
  );
};

export default Movement;
