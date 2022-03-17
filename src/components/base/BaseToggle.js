import { useState } from 'react';
import classes from './BaseToggle.module.scss';

const BaseToggle = (props) => {
  const [enabled, setEnabled] = useState(props.enabled || false);

  const toggle = () => {
    setEnabled((previousState) => !previousState);
    props.onClick();
  };

  return (
    <div
      className={`${classes.toggle} ${enabled && classes.enabled}`}
      onClick={toggle}
    >
      <span className={classes.indicator}></span>
    </div>
  );
};

export default BaseToggle;
