import { useRef, useState } from 'react';
import './BaseInputFloatingLabel.scss';

const BaseInputFloatingLabel = (props) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const onBlurHandler = () => {
    if (inputRef.current.value.trim() === '') setFocused(false);
  };

  return (
    <div
      className={`relative h-grid-gap-small input--${focused ? 'focused' : ''}`}
    >
      <label className="label--floating" htmlFor={props.labelHtmlFor}>
        {props.labelTitle}
      </label>
      <input
        type={props.inputType}
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder || null}
        ref={inputRef}
        onClick={() => setFocused(true)}
        onBlur={onBlurHandler}
        onChange={() => props.onChange(inputRef.current.value)}
        value={props.inputValue}
      ></input>
    </div>
  );
};

export default BaseInputFloatingLabel;
