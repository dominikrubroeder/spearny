import classes from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode || 'button';
  // primary, secondary, tertiary, ...
  const priority = props.priority || 'default';
  // small, default, medium, large, ...
  const size = props.size || 'default';
  // default, desctructive, ...
  const ofType = props.ofType || 'default';

  const classList = `${mode}--${priority}`;
  const withSize = `size--${size}`;
  const isType = `type--${ofType}`;

  return (
    <button
      className={`${classes[classList]} ${classes[withSize]} ${classes[isType]}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
