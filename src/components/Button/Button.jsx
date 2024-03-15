import PropTypes from "prop-types"; // Import PropTypes
import "./Button.css";

export default function Buttons(props) {
  let { type, name, value, handleClick, bTitle, btype, btnImg, btnImgSize } =
    props;
  if (!name) {
    name = "Input-box";
  }
  if (!value) {
    value = "";
  }
  if (!type) {
    type = "button";
  }
  if (!handleClick) {
    handleClick = () => {};
  }

  return (
    <div
      className={
        btype === "primary"
          ? "btn-primary div-center"
          : "btn-secondary div-center"
      }
    >
      <button type={type} name={name} value={value} onClick={handleClick}>
        {btnImg && (
          <img
            className="btn-Img"
            src={btnImg}
            alt=""
            width={btnImgSize ? btnImgSize : "25px"}
            height={btnImgSize ? btnImgSize : "25px"}
          />
        )}
        {bTitle}
      </button>
    </div>
  );
}

// Define PropTypes validation
Buttons.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
  bTitle: PropTypes.node.isRequired,
  btype: PropTypes.oneOf(["primary", "secondary"]),
  btnImg: PropTypes.string,
  btnImgSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
