import styles from './BaseLabel.module.css';

const BaseLabel = (props) => {
  return <span className={styles.tag}>{props.title}</span>;
};

export default BaseLabel;
