import "./ResetPsw.css";
import TextBox from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import enter from "../../assets/enter.png";
import { RiLockPasswordFill } from "react-icons/ri";

export default function ResetPsw() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="resetpsw-container">
      <div className="resetpsw-content">
        <div className="resetpsw-head">
          <h1>Reset Password</h1>
        </div>

        <form className="resetpsw-fields">
          <div>
          <div className="field">
              <RiLockPasswordFill className="input-icon" />
              <label>Password</label>
            </div>
              <TextBox
                type={"password"}
                placeholder="Enter your New Password here"
              />
          </div>
          <div>
          <div className="field">
              <RiLockPasswordFill className="input-icon" />
              <label>Password</label>
            </div>
              <TextBox
                type={"password"}
                placeholder="Confirm your New Password here"
              />
          </div>

          <Button
            handleClick={handleContinue}
            btype="primary"
            bTitle="Continue"
          />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="resetpsw-footer">
            <Button
              handleClick={handleContinue}
              btype="secondary"
              bTitle="Return to Login"
              btnImg={enter}
              btnImgSize={"20px"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
