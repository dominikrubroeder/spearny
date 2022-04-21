import { useRef, useState } from 'react';
import BaseButton from '../../base/BaseButton';

const AddNewEntitiy = (props) => {
  const [inputVisible, setInputVisible] = useState(false);
  const inputValue = useRef('');
  const entityType = props.entityType;

  return (
    <div className="v-grid-space-between">
      {inputVisible && (
        <form className="v-grid-gap-small appear">
          <input placeholder="Add new..." ref={inputValue} />
          <BaseButton mode="text" size="small" onClick={props.onAdd}>
            Add
          </BaseButton>
        </form>
      )}

      <BaseButton
        mode="text"
        size="small"
        onClick={setInputVisible.bind(null, (previousState) => !previousState)}
      >
        Add new {entityType}
      </BaseButton>
    </div>
  );
};

export default AddNewEntitiy;
