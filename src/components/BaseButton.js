import styles from './BaseButton.module.scss';

const BaseButton = (props) => {
  // button, link, ...
  const mode = props.mode === undefined ? 'button' : props.mode;
  // primary, secondary, tertiary, ...
  const priority = props.priority;
  const text = props.text;
  const icon = props.icon;

  const classes = `${mode}--${priority}`;

  return (
    <button className={styles[`${classes}`]}>
      {icon} {text}
    </button>
  );
};

export default BaseButton;
