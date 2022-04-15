import { useState } from 'react';
import './BaseSwitch.scss';

const BaseSwitch = (props) => {
  const switchOptions = props.options;
  const [activeSwitch, setActiveSwitch] = useState(props.initialValue || 0);

  const activateSwitchOption = (index) => {
    setActiveSwitch(index);
    props.onClick(switchOptions[activeSwitch]);
  };

  return (
    <div className="base-switch">
      {switchOptions.map((option, index) => (
        <div
          key={option}
          className={`base-switch__option ${
            switchOptions[activeSwitch] === option ? 'active' : ''
          }`}
          onClick={() => activateSwitchOption(index)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default BaseSwitch;
