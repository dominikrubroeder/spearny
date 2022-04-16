import { useState } from 'react';
import './BaseSwitch.scss';

const BaseSwitch = (props) => {
  const [activeSwitch, setActiveSwitch] = useState(props.initialValue);
  const switchOptions = props.options;
  // switchVariants: prioritized (default), reduced, minimal, text, ...
  const switchVariant = props.variant || 'prioritized';

  const activateSwitchOption = (index) => {
    setActiveSwitch(index);
    props.onClick(switchOptions[index]);
    console.log(index);
    console.log(switchOptions[index]);
  };

  return (
    <div className={`base-switch base-switch--${switchVariant}`}>
      {switchOptions.map((option, index) => (
        <div
          key={option}
          className={`base-switch__option ${
            switchOptions[activeSwitch] === option ? 'active' : ''
          }`}
          onClick={() => activateSwitchOption(index)}
        >
          {`${option.charAt(0).toUpperCase()}${option
            .slice(1)
            .replaceAll('-', ' ')}`}
        </div>
      ))}
    </div>
  );
};

export default BaseSwitch;
