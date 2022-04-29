import './BaseCard.scss';

const BaseCard = (props) => {
  // Background variants: light (= gray) (=default), filler, transparent ...
  const background = props.background || 'light';
  const mode = props.mode || 'container';
  const dropShadow = props.dropShadow ? 'drop-shadow' : '';
  const className = props.className || '';

  return (
    <div
      className={`base-card base-card--mode-${mode} base-card--background-${background} ${dropShadow} ${className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default BaseCard;
