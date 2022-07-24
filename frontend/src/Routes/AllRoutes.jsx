import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../components/Signup/Signup";
import { Home } from "../components/Home-afterLogin/Home";
import { Login } from "../components/Login/Login";
import TaskComponent from "../components/Tasks/TaskComponent";
import Introd from '../components/Introduction/Introd';
import Navbar from '../components/Navbar/Navbar';
import Price from "../components/price/Price";
import New from '../components/Review/New';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Introd />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
        <Route path="/review" element={<New />} />
        <Route path="/tasks" element={<TaskComponent />} />
      </Routes>
    </div>
  );
};
