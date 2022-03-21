import { useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';
import BaseHelpText from '../base/BaseHelpText';

const BaseDropdown = (props) => {
  const head = props.head || <h3>Title</h3>;
  const hasToggle = props.hasToggle;
  const helpTitle = props.helpTitle;
  const helpText = props.helpText;
  const addAction = props.onAdd;
  const addActionText = props.addActionText;
  const hasEditActions = addAction ? true : false;
  const hasHelp = helpTitle || helpText ? true : false;

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleIsOpenState = () => {
    if (hasToggle) return;

    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  const activateSection = () => {
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
