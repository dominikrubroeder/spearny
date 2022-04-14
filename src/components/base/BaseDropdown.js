import { Fragment, useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';

const BaseDropdown = (props) => {
  const head = props.head || <h3>Title</h3>;
  const hasToggle = props.hasToggle;

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleIsOpenState = () => {
    if (hasToggle) return;

    setIsOpen((previousState) => !previousState);

    if (props.onClick) props.onClick();
  };

  const toggleSection = () => {
    setIsOpen((previousState) => !previousState);
    if (props.onClick) props.onClick();
  };

  const headClassNames = `${
    !hasToggle ? classes['dropdown--head'] : ''
  } v-grid-gap-small-no-wrap`;

  const openCloseComp = (
    <Fragment>
      {!isOpen && !hasToggle && (
        <BaseButton
          mode="text"
          priority="secondary"
          onClick={toggleIsOpenState}
        >
          +
        </BaseButton>
      )}
      {isOpen && !hasToggle && (
        <BaseButton
          mode="text"
          priority="secondary"
          onClick={toggleIsOpenState}
        >
          -
        </BaseButton>
      )}
    </Fragment>
  );

  const switchComp = hasToggle && (
    <BaseToggle onClick={toggleSection} enabled={isOpen ? true : false} />
  );

  return (
    <div className="h-grid">
      <div className={headClassNames}>
        <div className="w-100" onClick={toggleIsOpenState}>
          {head}
        </div>
        <div className="v-grid-gap-small-no-wrap">
          {openCloseComp}
          {switchComp}
        </div>
      </div>
      {isOpen && <div className="h-grid">{props.children}</div>}
    </div>
  );
};

export default BaseDropdown;
