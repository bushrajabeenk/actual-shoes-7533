import React from 'react'
import "./login.css"
import {  Link } from "react-router-dom";

export const Login = () => {
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
        <div>
          <h5>The Changelog</h5>
        </div>
        <div>
          <h2>Sign In</h2>
          <input type="text" id='ggl' placeholder='Sign Up with Google' style={{width:"200px", marginTop:"15px"}}/><br />
          <p style={{textAlign:"center"}}>or</p> <br />
          <p>Please enter a valid email address</p>
          <div>
          <input type="text" placeholder='Email'/><br />
          <input type="text" placeholder='Password'/>
          </div>
          <div id='chkbox'>
          <input type="checkbox" style={{width:"15px"}}/>
          <span style={{marginTop:"11px"}}>Remember me</span>
          </div>
          <button>Log In</button>
          <p style={{color: "#00b289", fontSize:"16px"}}>Reset Password</p>
          <p style={{color: "#00b289", fontSize:"16px"}}>Resend Verification Email</p>
        </div>
      </div>
    </div>
  )
}

