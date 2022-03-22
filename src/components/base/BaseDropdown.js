import { Fragment, useState } from 'react';
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

    setIsOpen((previousState) => !previousState);
  };

  const activateSection = () => {
    setIsOpen((previousState) => !previousState);
  };

  const headClassNames = `${
    !hasToggle ? classes['dropdown--head'] : ''
  } v-grid-gap-small-no-wrap`;

  const openCloseComp = (
    <Fragment>
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
    </Fragment>
  );

  const switchComp = hasToggle && (
    <BaseToggle onClick={activateSection} enabled={isOpen ? true : false} />
  );

  const editActionsComp = hasEditActions && isOpen && (
    <div className="v-grid-gap-small-no-wrap">
      {
        <BaseButton
          mode="link"
          priority="primary"
          size="small"
          onClick={addAction}
        >
          {`Add new ${addActionText}`}
        </BaseButton>
      }
    </div>
  );

  const helpTextComp = hasHelp && (
    <BaseHelpText title={helpTitle}>{helpText}</BaseHelpText>
  );

  return (
    <div className="h-grid">
      <div className={headClassNames}>
        <div className="w-100" onClick={toggleIsOpenState}>
          {head}
        </div>
        <div className="v-grid-gap-small-no-wrap">
          {editActionsComp}
          {helpTextComp}
          <div className="v-grid-gap-small-no-wrap">
            {openCloseComp}
            {switchComp}
          </div>
        </div>
      </div>
      {isOpen && <div className="h-grid">{props.children}</div>}
    </div>
  );
};

export default BaseDropdown;
