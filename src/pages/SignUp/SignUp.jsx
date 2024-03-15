import { useState } from "react";
import "./SignUp.css";
import TextBox from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import google from "../../assets/google.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        name,
        password,
      });
      alert("Registration Successful. Now you can log in.");
      if (response.data) {
        console.log(response.data);
        navigate("/login");
      }
    } catch (error) {
      alert(
        "Registration failed. The email is already in use or there was an error."
      );
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-head">
          <h1>Sign Up</h1>
        </div>
        <form className="signup-fields" onSubmit={registerUser}>
          <div>
          <div className="field">
              <MdEmail className="input-icon" />
              <label>Email </label>
            </div>
              <TextBox
                inputName="email"
                value={email}
                handleChange={(e) => setEmail(e)}
                type={"email"}
                placeholder="Enter your Email ID here"
              />
          </div>
          <div>
          <div className="field">
              <FaUser className="input-icon" />
              <label>UserName</label>
            </div>
              <TextBox
                inputName="name"
                value={name}
                handleChange={(e) => setName(e)}
                type={"text"}
                placeholder="Enter your Username here"
              />
          </div>
          <div>
          <div className="field">
              <RiLockPasswordFill className="input-icon" />
              <label>Password</label>
            </div>
              <TextBox
                inputName="password"
                value={password}
                handleChange={(e) => setPassword(e)}
                type={"password"}
                placeholder="Enter your password here"
              />
          </div>
          <Button
            type="submit"
            value="register"
            btype="primary"
            bTitle="Sign up"
            onClick={registerUser}
          />

          <div className="alreadylogin">
            Have an Account?
            <Link to="/login" className="login-link">
              Log In
            </Link>
          </div>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="signup-footer">
            <Button
              btype="secondary"
              bTitle="Signup with Google"
              btnImg={google}
              btnImgSize={"20px"}
            />
            <div>
              <p>
                By clicking “signup with Google/Email/SAML” above you
                acknowledge that you have read and understood and agree to
                WebPrints Terms & Conditions & Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
