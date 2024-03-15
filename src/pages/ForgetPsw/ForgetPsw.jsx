import "./ForgetPsw.css";
import TextBox from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import enter from "../../assets/enter.png";
import { MdEmail } from "react-icons/md";

export default function ForgetPsw() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/login");
  };

  const handleReset = () => {
    navigate("/resetpsw");
  };

  return (
    <div className="forgetpsw-container">
      <div className="forgetpsw-content">
        <div className="forgetpsw-head">
          <h1>Forgot your password?</h1>
          <h4>
            Dont worry, we ll send you a message to help you reset your
            passsword.
          </h4>
        </div>

        <form className="forgetpsw-fields">
          <div>
          <div className="field">
              <MdEmail className="input-icon" />
              <label>Email </label>
            </div>
              <TextBox
                type={"email"}
                placeholder="Enter your Registered Email ID here"
              />
          </div>

          <Button handleClick={handleReset} btype="primary" bTitle="Continue" />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="forgetpsw-footer">
            <Button
              handleClick={handleReturn}
              btype="secondary"
              bTitle="Return To Login"
              btnImg={enter}
              btnImgSize={"20px"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
