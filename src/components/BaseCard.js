import styles from './BaseCard.module.css';

const BaseCard = (props) => {
  const classes = `${styles.tag} ${props.classes}`;

  return <span className={classes}>{props.children}</span>;
};

export default BaseCard;
