import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import BaseCard from '../base/BaseCard';
import classes from './Notification.scss';

const Notification = (props) => {
  const head = (
    <header className="v-grid-space-between">
      <div>{props.title}</div>
      <div>
        <FontAwesomeIcon
          onClick={props.onClose}
          icon="fa-solid fa-circle-xmark"
        />
      </div>
    </header>
  );

  const content = <div>{props.children}</div>;

  const notification = (
    <BaseCard
      className="notification h-grid container"
      dropShadow={props.dropShadow}
      background={props.background || 'white'}
    >
      {head}
      {content}
    </BaseCard>
  );

  return (
    <Fragment>
      {createPortal(notification, document.getElementById('notifications'))}
    </Fragment>
  );
};

export default Notification;
