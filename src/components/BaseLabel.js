import styles from './BaseLabel.module.css';

const BaseLabel = (props) => {
  const classes = `${styles.tag} ${props.classes}`;

  return <span className={classes}>{props.title}</span>;
};

export default BaseLabel;
