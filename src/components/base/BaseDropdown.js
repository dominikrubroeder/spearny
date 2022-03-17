import { useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';

const BaseDropdown = (props) => {
  const hasEditActions = props.hasEditActions;
  const hasToggle = props.hasToggle;
  const editMode = props.editModeState;

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleIsOpenState = () => {
    // If movement item is currently in editMode, do not toggle the dropdown
    if (editMode) return;

    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  return (
    <div className="dropdown">
      <div className={classes.head}>
        <div className={classes.heading} onClick={toggleIsOpenState}>
          {props.head && props.head}
        </div>
        {hasEditActions && isOpen && (
          <span className={classes.actions}>
            {!editMode && (
              <BaseButton mode="link" priority="primary" onClick={props.onEdit}>
                Edit
              </BaseButton>
            )}
            {editMode && (
              <BaseButton mode="link" priority="primary" onClick={props.onDone}>
                Done
              </BaseButton>
            )}
          </span>
        )}
        <span>
          {!isOpen && !hasToggle && (
            <BaseButton mode="link" onClick={toggleIsOpenState}>
              +
            </BaseButton>
          )}
          {isOpen && !hasToggle && (
            <BaseButton mode="link" onClick={toggleIsOpenState}>
              -
            </BaseButton>
          )}
          {hasToggle && (
            <BaseToggle
              onClick={toggleIsOpenState}
              enabled={props.toggleEnabled}
            />
          )}
        </span>
      </div>
      <div className={`${classes.content} h-grid-gap-small`}>
        {isOpen && props.children}
      </div>
    </div>
  );
};

export default BaseDropdown;
