import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handelLogin = async () => {
    let user = null;
    await axios
      .post(" https://bonsai15.herokuapp.com/user/login", formData)
      .then(({ data }) => {
        console.log(data[0], "data");
        user = data[0];
        localStorage.setItem("userid", user["_id"]);
        console.log(user, "after post");
      })
      .catch((err) => {
        console.log(err.message, ": error ocuured");
        alert("Invalid Credentials");
      });
    // console.log(data[0])
    console.log(user, ": user");
    if (user) {
      alert("Login successfull");
      nav("/Home");
    }
  };

  // const handelLogin = async () => {
  //   const { data } = await axios.post(
  //     "https://bonsai15.herokuapp.com/user/Signup",
  //     formData
  //   );
  //   console.log(data);
  //   nav("/Login");
  // };
  return (
    <div>
      <div className="nav">
        <div>
          <img
            src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png"
            alt=""
            width="30px"
          />
        </div>
        <div className="lofsign">
          <Link to="/Login" className="design">
            <h5>Login</h5>
          </Link>
          <Link to="/signup" className="design">
            <h5>Sign up</h5>
          </Link>
        </div>
      </div>
      <div id="signin">
        <div className="changelog">
          <div>
            <h5>The Changelog</h5>
          </div>
          <div id="smldiv">
            <div>
              <span className="c1">improvent</span>
              <span className="c2">New settings page.</span>
              <span className="c3">
                The settings page now has section on the left so you get quicker
                to whare you need,and get a...
              </span>
            </div>
            <div>
              <button id="smlbtn">New</button>
              <span className="c2">
                Request upfront deposits on your proposals(US only)
              </span>
              <span className="c3">
                Secure your work at the start of every project by requiring a
                deposit on your proposal.In just...
              </span>
            </div>
            <div>
              <button id="smlbtn">New</button>
              <span className="c2">
                Use your email address for notifications sent to your client
                from bonsai
              </span>
              <span className="c3">
                {" "}
                Set your next at the start of every project by requiring a
                deposit on your proposal.Insted of from...
              </span>
            </div>
            <div>
              <span className="c1">improvent</span>
              <span className="c2">
                Look Like a pro with your custom brand.
              </span>
              <span className="c3">
                Add your custom brand to all your future invoices and
                contracts.Look profesnioals with every...
              </span>
            </div>
            <div>
              <span className="c1">improvent</span>
              <button id="smlbtn">Bonsai Cash</button>
              <span className="c3">
                {" "}
                You might've noticed the dashboard got a visual uplift. It's not
                just looks though
              </span>
            </div>
          </div>
        </div>
        <div id="sec">
          <p id="text">Sign In</p>
          <input
            type="text"
            id="ggl"
            placeholder="Sign Up with Google"
            style={{ width: "200px", marginTop: "15px" }}
          />
          <br />
          <p style={{ textAlign: "center", marginBottom: "0px" }}>or</p> <br />
          <p>Please enter a valid email address</p>
          <div>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div id="chkbox">
            <input type="checkbox" style={{ width: "15px" }} />
            <span style={{ marginTop: "11px" }}>Remember me</span>
          </div>
          <button id="logbtn" onClick={handelLogin}>
            Log In
          </button>
          <p style={{ color: "#00b289", fontSize: "16px" }}>Reset Password</p>
          <p style={{ color: "#00b289", fontSize: "16px" }}>
            Resend Verification Email
          </p>
        </div>
      </div>
    </div>
  );
};
