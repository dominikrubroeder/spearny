import { Fragment, useState } from 'react';
import classes from './BaseDropdown.module.scss';
import BaseButton from './BaseButton';
import BaseToggle from '../base/BaseToggle';
import { CSSTransition } from 'react-transition-group';

const BaseDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const head = props.head || <h3>Title</h3>;
  const hasToggle = props.hasToggle;

  const toggleIsOpenState = () => {
    if (hasToggle) return;

    setIsOpen((previousState) => !previousState);

    // Update, ...
    if (props.onClick) props.onClick();
  };

  const toggleSection = () => {
    setIsOpen((previousState) => !previousState);
  };

  const headClassNames = `${
    !hasToggle ? classes['dropdown--head'] : ''
  } v-grid gap-small no-wrap`;

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

  /**
   * CSSTransiton
   * mountOnEnter unmountOnExit important here for showing and hiding
   */
  return (
    <div className="h-grid">
      <div className={headClassNames}>
        <div className="w-100" onClick={toggleIsOpenState}>
          {head}
        </div>
        <div className="v-grid gap-small no-wrap">
          {openCloseComp}
          {switchComp}
        </div>
      </div>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        classNames="fade-up-minimal"
        timeout={400}
      >
        <div className="h-grid">{props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default BaseDropdown;
