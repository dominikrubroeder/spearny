import { useState } from 'react';
import classes from './BaseHelpText.module.scss';
import BaseCard from './BaseCard';
import BaseButton from './BaseButton';

const BaseHelpText = (props) => {
  const title = props.title || 'Info';
  const [helptextVisible, setHelptextVisible] = useState(false);

  const showHelptext = () => {
    setHelptextVisible(() => true);
  };

  const hideHelptext = () => {
    setHelptextVisible(() => false);
  };

  return (
    <div className={classes.helpbox}>
      <BaseButton mode="link" priority="primary" onClick={showHelptext}>
        ?
      </BaseButton>
      {helptextVisible && (
        <BaseCard background="white" classes={classes.helpboxContent}>
          <header className="v-grid-space-between">
            {title}
            <BaseButton mode="link" priority="primary" onClick={hideHelptext}>
              x
            </BaseButton>
          </header>
          <div className={classes.helptext}>{props.children}</div>
        </BaseCard>
      )}
    </div>
  );
};

export default BaseHelpText;
