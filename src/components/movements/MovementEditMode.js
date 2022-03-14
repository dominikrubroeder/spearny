import { useState } from 'react';

const MovementsEditMode = (props) => {
  const [title, setTitle] = useState(props.movement.title);
  const [amount, setAmount] = useState(props.movement.amount);
  const [description, setDescription] = useState(props.movement.description);
  const [paidBy, setPaidBy] = useState(props.movement.paidBy);
  const [paidTo, setPaidTo] = useState(props.movement.paidTo);
  const [tags, setTags] = useState(props.movement.tags);

  const titleOnChangeHandler = (e) => {
    setTitle(() => {
      return e.target.value;
    });
  };

  const amountOnChangeHandler = (e) => {
    setAmount(() => {
      return e.target.value;
    });
  };

  const descriptionOnChangeHandler = (e) => {
    setDescription(() => {
      return e.target.value;
    });
  };

  const paidByOnChangeHandler = (e) => {
    setPaidBy(() => {
      return e.target.value;
    });
  };

  const paidToOnChangeHandler = (e) => {
    setPaidTo(() => {
      return e.target.value;
    });
  };

  return (
    <form>
      <input type="text" value={title} onChange={titleOnChangeHandler} />
      <input type="text" value={amount} onChange={amountOnChangeHandler} />
      <input type="text" value={paidBy} onChange={paidByOnChangeHandler} />
      <input type="text" value={paidTo} onChange={paidToOnChangeHandler} />
      <textarea rows="3" onChange={descriptionOnChangeHandler}>
        {description}
      </textarea>
    </form>
  );
};

export default MovementsEditMode;
