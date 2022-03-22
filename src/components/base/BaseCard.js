import classes from './BaseCard.module.scss';

const BaseCard = (props) => {
  // white, light (= gray), default: transparent, ...
  const background = props.background || 'transparent';
  const className = props.className || '';
  const mode = props.mode || '';

  const classList = `${classes.card} ${className} ${classes[background]} ${classes[mode]}`;

  return <div className={classList}>{props.children}</div>;
};

export default BaseCard;
