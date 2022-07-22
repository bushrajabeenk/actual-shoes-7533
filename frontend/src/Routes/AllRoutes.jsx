import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Signup } from '../components/Signup/Signup';
import {Home} from "../components/Home-afterLogin/Home"
import { Login } from '../components/Login/Login';
import TaskComponent from "../components/Tasks/TaskComponent";


export const Mainroute = () => {
  return (
    <div>
    <Routes>
     <Route path="/Home" element={<Home/>} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/tasks" element={<TaskComponent />} />
    </Routes>

    </div>
  )
}
