import { useState } from 'react';
import styles from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';

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
            {!editMode && (
              <BaseButton
                mode="link"
                priority="primary"
                onClick={onClickEditHandler}
              >
                Edit
              </BaseButton>
            )}
            {editMode && (
              <BaseButton
                mode="link"
                priority="primary"
                onClick={onClickDoneHandler}
              >
                Done
              </BaseButton>
            )}
          </span>
        )}
        <span>
          {!isOpen && (
            <BaseButton
              mode="link"
              priority="default"
              onClick={toggleIsOpenState}
            >
              +
            </BaseButton>
          )}
          {isOpen && (
            <BaseButton
              mode="link"
              priority="default"
              onClick={toggleIsOpenState}
            >
              -
            </BaseButton>
          )}
        </span>
      </div>
      <div className={styles.content}>{isOpen && props.children}</div>
    </div>
  );
};

export default BaseDropdown;
