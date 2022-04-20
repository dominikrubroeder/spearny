import BaseButton from '../../base/BaseButton';
import './MovementListActionsToggle.scss';

const MovementListActionsToggle = (props) => {
  return (
    <BaseButton
      className={`movement-list__actions-toggle ${props.state ? 'active' : ''}`}
      mode="text"
      onClick={props.onClick.bind(null, (previousValue) => !previousValue)}
    >
      <span></span>
      <span></span>
      <span></span>
    </BaseButton>
  );
};

export default MovementListActionsToggle;
