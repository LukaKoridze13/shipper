import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
