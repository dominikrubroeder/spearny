import { useState } from 'react';
import './BaseSwitch.scss';

const BaseSwitch = (props) => {
  const switchOptions = props.options;
  const [activeSwitch, setActiveSwitch] = useState(props.initialValue || 0);

  const toggleSwitch = () => {
    setActiveSwitch((previousState) => {
      if (previousState === 0) {
        return 1;
      } else if (previousState === 1) {
        return 0;
      }
    });

    props.onClick(switchOptions[activeSwitch]);
  };

  return (
    <div className="base-switch" onClick={toggleSwitch}>
      {switchOptions.map((option) => (
        <div
          key={option}
          className={`base-switch__option ${
            switchOptions[activeSwitch] === option ? 'active' : ''
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default BaseSwitch;
