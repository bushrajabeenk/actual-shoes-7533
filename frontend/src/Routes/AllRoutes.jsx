import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../components/Signup/Signup";
import { Home } from "../components/Home-afterLogin/Home";
import { Login } from "../components/Login/Login";
import TaskComponent from "../components/Tasks/TaskComponent";
import MainDropdown from '../components/Dropdown/mainDropdown/MainDropdown';
import Introd from '../components/Introduction/Introd';
import Navbar from '../components/Navbar/Navbar';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskComponent />} />
        <Route path="/introd" element={<Introd />} /> */}
        {/* <Route path="/MainDropdown" element={<MainDropdown />} /> */}
      </Routes>
    </div>
  );
};
