import { useState } from "react";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  validation,
  validationMessage,
}) => {
  const [error, setError] = useState(undefined);

  const _onChange = (e) => {
    const regExp = RegExp(validation);
    const validationResult = regExp.exec(e.target.value)
    console.log("Validation Result:", validationResult)
    if (!validationResult) {
      console.log("validation failed", validationResult);
      setError(validationMessage);
    } else {
      console.log("validation success", validationResult);
      setError(undefined);
    }

    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        onChange={_onChange}
        value={value}
      ></input>
      {!!error && error}
    </div>
  );
};

export default Input;
