import styles from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode || 'button';
  // primary, secondary, tertiary, ...
  const priority = props.priority || 'default';

  const classes = `${mode}--${priority}`;

  return (
    <button className={styles[`${classes}`]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BaseButton;
