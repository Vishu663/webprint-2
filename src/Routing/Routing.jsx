import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgetPsw from "../pages/ForgetPsw/ForgetPsw";
import ResetPsw from "../pages/ResetPsw/ResetPsw";
import Home from "../pages/Home/Home";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpsw" element={<ForgetPsw />} />
                <Route path="/resetpsw" element={<ResetPsw />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}
