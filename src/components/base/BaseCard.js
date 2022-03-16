import classes from './BaseCard.module.scss';

const BaseCard = (props) => {
  const classList = `${classes.tag} ${props.classes}`;

  return <span className={classList}>{props.children}</span>;
};

export default BaseCard;
