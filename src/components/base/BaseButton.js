import classes from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode || 'button';
  // primary, secondary, tertiary, ...
  const priority = props.priority || 'default';
  // small, default, medium, large, ...
  const size = props.size || 'default';

  const classList = `${mode}--${priority}`;
  const withSize = `size--${size}`;

  return (
    <button
      className={`${classes[classList]} ${classes[withSize]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
