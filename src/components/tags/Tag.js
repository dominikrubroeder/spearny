import BaseButton from '../base/BaseButton';

const Tag = (props) => {
  return <BaseButton onClick={props.onClick}>{props.children}</BaseButton>;
};

export default Tag;
