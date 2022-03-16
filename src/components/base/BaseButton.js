import classes from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode || 'button';
  // primary, secondary, tertiary, ...
  const priority = props.priority || 'default';

  const classList = `${mode}--${priority}`;

  return (
    <button className={classes[`${classList}`]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BaseButton;
