import styles from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode === undefined ? 'button' : props.mode;
  // primary, secondary, tertiary, ...
  const priority = props.priority;

  const classes = `${mode}--${priority}`;

  return (
    <button className={styles[`${classes}`]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BaseButton;
