import classes from './BaseCard.module.scss';

const BaseCard = (props) => {
  // white, light (= gray), default: transparent, ...
  const background = props.background || 'transparent';
  // true or false
  const isLabel = props.isLabel || false;
  const classList = `${classes.card} ${isLabel && classes.label} ${
    props.classes
  } ${classes[background]}`;

  return <div className={classList}>{props.children}</div>;
};

export default BaseCard;
