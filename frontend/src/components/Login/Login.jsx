import React from 'react'
import "./Login.css"
import {  Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

export const Login = () => {
  const [formData,setFormData]= useState({})
  const nav= useNavigate()

  const handleChange= (e)=>{
      const {value,name} = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
  }
  const handelLogin=async ()=>{
    const {data} = await axios.post("http://localhost:8080/user/login",formData)
    console.log(data[0])
    const user= data[0]
    localStorage.setItem("userid",user["_id"])
    nav("/Home")
  }
  return (
    <div>
      <div className='nav'>
        <div>
        <img src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png" alt="" width="30px"/>
        </div>
        <div className='lofsign'>
        <Link to="/Login" className='design'><h5>Login</h5></Link>
        <Link to="/signup" className='design'><h5>Sign up</h5></Link>
        </div>
      </div>
      <div id='signin'>
        <div className='changelog'>
          <div><h5>The Changelog</h5></div>
          <div>
          <div>
            improvent
            <span>New settings page.</span>
            <span>The settings quicker to whare you need,and get a...</span>
          </div>
          <div>
            <button id='smlbtn'>New</button>
            <span>Request upfront deposits on your proposals(US only)</span><p>
              Secure your work at the start of every project by requiring a deposit on your proposal.In just...
            </p>
          </div>
          <div>
          <button id='smlbtn'>New</button>
            <h5>Use your email address for notifications sent to your client from bonsai</h5><p>
              Set your next at the start of every project by requiring a deposit on your proposal.Insted of from...
            </p>
          </div>
          <div>
          <p>improvent<h5>New settings page.</h5>The settings quicker to whare you need,and get a...</p>
          </div>
          <div>
            <p>improvent<button id='smlbtn'>Bonsai Cash</button> You might've noticed the dashboard got a visual uplift. It's not just looks though</p>
          </div>
          </div>
        </div>
        <div id='sec'>
          <p id='top'>Sign In</p>
          <input type="text" id='ggl' placeholder='Sign Up with Google' style={{width:"200px", marginTop:"15px"}}/><br />
          <p style={{textAlign:"center",marginBottom:"0px"}}>or</p> <br />
          <p>Please enter a valid email address</p>
          <div>
          <input type="text" name='email' onChange={handleChange} placeholder='Email'/><br />
          <input type="text" name='password' onChange={handleChange} placeholder='Password'/>
          </div>
          <div id='chkbox'>
          <input type="checkbox" style={{width:"15px"}}/>
          <span style={{marginTop:"11px"}}>Remember me</span>
          </div>
          <button id='logbtn' onClick={handelLogin}>Log In</button>
          <p style={{color: "#00b289", fontSize:"16px"}}>Reset Password</p>
          <p style={{color: "#00b289", fontSize:"16px"}}>Resend Verification Email</p>
        </div>
      </div>
    </div>
  )
}

