import { useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';
import BaseHelpText from '../base/BaseHelpText';

const BaseDropdown = (props) => {
  const hasEditActions = props.hasEditActions;
  const hasToggle = props.hasToggle;
  const hasHelpText = props.hasHelpText;
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
      <div className="v-grid-gap-small-no-wrap">
        <div className="w-100" onClick={toggleIsOpenState}>
          {props.head && props.head}
        </div>
        <div className="v-grid-gap-small-no-wrap">
          {hasEditActions && isOpen && (
            <div className="v-grid-gap-small-no-wrap">
              {!editMode && (
                <BaseButton
                  mode="link"
                  priority="primary"
                  onClick={props.onEdit}
                >
                  Edit
                </BaseButton>
              )}
              {editMode && (
                <BaseButton
                  mode="link"
                  priority="primary"
                  onClick={props.onDone}
                >
                  Done
                </BaseButton>
              )}
            </div>
          )}
          {hasHelpText && <BaseHelpText>Testing</BaseHelpText>}
          <div className="v-grid-gap-small-no-wrap">
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
          </div>
        </div>
      </div>
      <div className={`${classes.content} h-grid`}>
        {isOpen && props.children}
      </div>
    </div>
  );
};

export default BaseDropdown;
