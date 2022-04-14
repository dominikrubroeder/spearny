import classes from './BaseButton.scss';

const BaseButton = (props) => {
  // button (default), text, ...
  const mode = props.mode || 'button';
  // primary (default), secondary, tertiary, ...
  const priority = props.priority || 'primary';
  // small, regular (default), medium, large, ...
  const size = props.size || 'regular';
  // regular (default), desctructive, ...
  const type = props.type || 'regular';

  return (
    <button
      className={`button button-mode--${mode} button-priority--${priority} button-size--${size} button-type--${type} ${
        props.className ?? ''
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
