import { useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';
import BaseHelpText from '../base/BaseHelpText';

const BaseDropdown = (props) => {
  const editMode = props.editModeState;
  const head = props.head || <h3>Title</h3>;
  const hasToggle = props.hasToggle;
  const helpTitle = props.helpTitle;
  const helpText = props.helpText;
  const addAction = props.onAdd;
  const addActionText = props.addActionText;
  const doneAction = props.onDone;
  const editAction = props.onEdit;
  const hasEditActions = addAction || doneAction || editAction ? true : false;
  const hasHelp = helpTitle || helpText ? true : false;

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleIsOpenState = () => {
    // If movement item is currently in editMode, do not toggle the dropdown
    if (editMode) return;
    if (hasToggle) return;

    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  const activateSection = () => {
    if (editMode) return;

    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  return (
    <div className="h-grid">
      <div
        className={`${
          !hasToggle ? classes['dropdown--head'] : ''
        } v-grid-gap-small-no-wrap`}
      >
        <div className="w-100" onClick={toggleIsOpenState}>
          {head}
        </div>
        <div className="v-grid-gap-small-no-wrap">
          {hasEditActions && isOpen && (
            <div className="v-grid-gap-small-no-wrap">
              {!editMode && (
                <BaseButton mode="link" priority="primary" onClick={editAction}>
                  Edit
                </BaseButton>
              )}
              {editMode && (
                <BaseButton mode="link" priority="primary" onClick={doneAction}>
                  Done
                </BaseButton>
              )}
              {addActionText && (
                <BaseButton
                  mode="link"
                  priority="primary"
                  size="small"
                  onClick={addAction}
                >
                  {`Add new ${addActionText}`}
                </BaseButton>
              )}
            </div>
          )}
          {hasHelp && <BaseHelpText title={helpTitle}>{helpText}</BaseHelpText>}
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
                onClick={activateSection}
                enabled={isOpen ? true : false}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && <div className="h-grid">{props.children}</div>}
    </div>
  );
};

export default BaseDropdown;
