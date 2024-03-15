import { useState, useContext } from "react";
import "./Login.css";
import TextBox from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import google from "../../assets/google.png";
import { UserContext } from "../../context/UserProvider";

export default function Login() {
  const {updateUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response.data.name);
      if(response.data.name) { 
        updateUser(response.data.name);
      }
      // Assuming your server sends back a token upon successful login
      if (response.data.token) {
        // Store the token in localStorage or a global state management system
        localStorage.setItem("token", response.data.token);
        // Redirect to the home page or dashboard
        navigate("/home");
      } else {
        alert("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. There was an error.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <h1>Login</h1>
        </div>

        <form className="login-fields" onSubmit={loginUser}>
          <div>
            <div className="field">
              <MdEmail className="input-icon" />
              <label>Email </label>
            </div>

            <TextBox
              type={"email"}
              placeholder="Enter your Email ID here"
              value={email}
              handleChange={(value) => setEmail(value)}
            />
            <Link to={"/signup"}>
              <p className="bottom-label">Dont have account register now?</p>
            </Link>
          </div>
          <div>
            <div className="field">
              <RiLockPasswordFill className="input-icon" />
              <label>Password</label>
            </div>
            <TextBox
              type={"password"}
              handleChange={(value) => setPassword(value)}
              placeholder="Enter your password here"
              value={password}
            />
            <a href="/forgetpsw"><p className="bottom-label">Forget Password?</p></a>
          </div>

          <Button
            btype="primary"
            type="submit"
            value="login"
            bTitle="Login"
            onClick={loginUser}
          />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="login-footer">
            <Button
              btype="secondary"
              bTitle="Login with Google"
              btnImgSize={"20px"}
              btnImg={google}
            />
            <div>
              <p>
                By clicking “Login with Google/Email/SAML” above you acknowledge
                that you have read and understood and agree to WebPrints Terms
                & Conditions & Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
