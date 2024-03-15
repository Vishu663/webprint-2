import PropTypes from "prop-types"; // Import PropTypes
import "./TextField.css";

export default function TextBox({
  inputName = "input-box",
  inputValue,
  type = "text",
  placeholder = "Enter value",
  handleChange = () => {},
  required = true,
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
        className="input-field"
        required={required}
      />
    </div>
  );
}

// Define PropTypes validation
TextBox.propTypes = {
  inputName: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};
