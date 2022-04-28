import { useRef, useState } from 'react';
import './AddNewEntity.scss';
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
    <div className="movement-details__add-new-entity v-grid space-between">
      {inputVisible && (
        <form className="v-grid gap-small appear appear--from-left">
          <input placeholder="Add new..." ref={inputValue} />
          <BaseButton mode="text" size="small" onClick={(e) => onAdd(e)}>
            +
          </BaseButton>
        </form>
      )}

      <BaseButton
        mode="text"
        size="small"
        onClick={setInputVisible.bind(null, (previousState) => !previousState)}
      >
        {inputVisible ? 'Done' : `Add new ${entityType}`}
      </BaseButton>
    </div>
  );
};

export default AddNewEntitiy;
