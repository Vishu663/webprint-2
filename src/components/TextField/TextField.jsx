import React from "react";
import "./TextField.css";

export default function TextBox({
  inputName = "input-box",
  inputValue,
  type = "text",
  placeholder = "Enter value",
  handleChange = () => {},
  required = false,
}) {
  const handleInputChange = (event) => {
    // Call the parent handleChange function with the updated input value
    handleChange(event.target.value);
  };

  return (
    <div>
      <input
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        type={type}
        placeholder={placeholder}
        className="input-field "
        required={required}
      />
    </div>
  );
}
