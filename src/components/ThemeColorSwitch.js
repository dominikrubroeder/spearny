import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './ThemeColorSwitch.scss';

const ThemeColorSwitch = () => {
  const [themeMode, setThemeMode] = useState('light');

  function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setThemeMode(theme);
    console.log('run...');
  }

  useEffect(() => getCurrentTheme(), []);

  const toggle = () => {
    setThemeMode((previousState) => {
      if (previousState === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });

    document.documentElement.classList.toggle('dark');
  };

  console.log(themeMode);

  return (
    <div className={`theme-switch theme--${themeMode}`} onClick={toggle}>
      <span className="theme-switch__indicator">
        <FontAwesomeIcon icon="fa-solid fa-sun" />
      </span>

      <span className="theme-switch__indicator theme-switch__indicator--main">
        <FontAwesomeIcon
          icon={`fa-solid fa-${themeMode === 'light' ? 'sun' : 'moon'}`}
        />
      </span>

      <span className="theme-switch__indicator">
        <FontAwesomeIcon icon="fa-solid fa-moon" />
      </span>
    </div>
  );
};

export default ThemeColorSwitch;
