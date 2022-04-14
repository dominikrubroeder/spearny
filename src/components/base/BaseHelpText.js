import { useState } from 'react';
import classes from './BaseHelpText.module.scss';
import BaseButton from './BaseButton';
import Notification from '../notification/Notification';

const BaseHelpText = (props) => {
  const title = props.title || 'Info';
  const [showNotification, setShowNotification] = useState(false);

  const showHelptext = () => {
    setShowNotification(true);
  };

  const hideHelptext = () => {
    setShowNotification(false);
  };

  return (
    <div className={classes.helpbox}>
      <BaseButton mode="text" priority="primary" onClick={showHelptext}>
        ?
      </BaseButton>
      {showNotification && (
        <Notification title={title} dropShadow={true} onClose={hideHelptext}>
          {props.children}
        </Notification>
      )}
    </div>
  );
};

export default BaseHelpText;
