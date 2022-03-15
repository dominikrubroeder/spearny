import { useState } from 'react';
import styles from './BaseDropdown.module.scss';

const BaseDropdown = (props) => {
  const hasEditActions = props.hasEditActions;
  const editMode = props.editModeState;

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleIsOpenState = () => {
    // If movement item is currently in editMode, do not toggle the dropdown
    if (editMode) return;

    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  // enableEditMode function was passed into this component by the parent Movement.js as prop
  const onClickEditHandler = () => {
    props.enableEditMode();
  };

  // hideDetails function was passed into this component by the parent Movement.js as prop
  const onClickDoneHandler = () => {
    props.hideDetails();
  };

  return (
    <div className="dropdown">
      <div className={styles.head}>
        <div className={styles.heading} onClick={toggleIsOpenState}>
          {props.head && props.head}
        </div>
        {hasEditActions && isOpen && (
          <span className={styles.actions}>
            {!editMode && <button onClick={onClickEditHandler}>Edit</button>}
            {editMode && <button onClick={onClickDoneHandler}>Done</button>}
          </span>
        )}
        <span onClick={toggleIsOpenState}>
          <span>{!isOpen && '+'}</span>
          <span>{isOpen && '-'}</span>
        </span>
      </div>
      <div className="dropdown__content">{isOpen && props.content}</div>
    </div>
  );
};

export default BaseDropdown;
