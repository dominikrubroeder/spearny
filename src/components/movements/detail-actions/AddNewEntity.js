import { useRef, useState } from 'react';
import BaseButton from '../../base/BaseButton';

const AddNewEntitiy = (props) => {
  const [inputVisible, setInputVisible] = useState(false);
  const inputValue = useRef('');
  const entityType = props.entityType;

  const onAdd = (e) => {
    e.preventDefault();
    props.onAdd(inputValue.current.value);
    inputValue.current.value = '';
  };

  return (
    <div className="v-grid-space-between">
      {inputVisible && (
        <form className="v-grid-gap-small appear">
          <input placeholder="Add new..." ref={inputValue} />
          <BaseButton mode="text" size="small" onClick={(e) => onAdd(e)}>
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
