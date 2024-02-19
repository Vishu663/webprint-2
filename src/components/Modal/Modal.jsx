import React, { useState } from "react";
import "./Modal.css"; // Import a separate CSS file for styling
import TextBox from "../TextField/TextField";
import { MdEmail } from "react-icons/md";

const Modal = ({
  onClose,
  title,
  content,
  image,
  modalPlaceholder,
  label1,
  label2,
  pholder1,
  pholder2,
  pholder3,
  icon1,
  icon2,
}) => {
  const [isAutomatic, setIsAutomatic] = useState(true);

  const handleToggle = (option) => {
    if (option === "automatic" && !isAutomatic) {
      setIsAutomatic(true);
    } else if (option === "manual" && isAutomatic) {
      setIsAutomatic(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="modal-fields">
          <div>
            <div className="modal-field">
              <div className="input-icon">{icon1}</div>
              <label>{label1}</label>
            </div>

            <TextBox type={"text"} placeholder={pholder1} />
          </div>
          <div>
            <div className="modal-field">
              <div className="input-icon">{icon2}</div>
              <label>{label2}</label>
            </div>

            <TextBox type={"text"} placeholder={pholder2} />
          </div>
          <div className="dual-option-toggle">
            <button
              className={`toggle-button ${
                isAutomatic ? "automatic" : "manual"
              }`}
              onClick={() => handleToggle("automatic")}
              disabled={isAutomatic}
            >
              Automatic
            </button>
            <button
              className={`toggle-button ${
                isAutomatic ? "manual" : "automatic"
              }`}
              onClick={() => handleToggle("manual")}
              disabled={!isAutomatic}
            >
              Manual
            </button>
          </div>
          {!isAutomatic && <TextBox type={"text"} placeholder={pholder3} />}
          <div className="modal-buttons">
          <button>Create</button>
          <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
