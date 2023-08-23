import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/Home"
import Login from "@/pages/LogIn/LogIn"
import SignUp from "@/pages/SignUp/SignUp";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
