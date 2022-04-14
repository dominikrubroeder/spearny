import classes from './BaseCard.module.scss';

const BaseCard = (props) => {
  // white, light (= gray), default: transparent, ...
  const background = props.background || 'transparent';
  const className = props.className || '';
  const mode = props.mode || '';
  const dropShadow = props.dropShadow ? 'drop-shadow' : '';

  const classList = `${classes.card} ${className} ${classes[background]} ${classes[mode]} ${dropShadow}`;

  return (
    <div className={classList} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default BaseCard;
