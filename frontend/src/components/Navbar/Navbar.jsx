import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navBack p-4">
        <div className="container-fluid">
          <div className="leftIconDiv">
            <a className="navbar-brand ms-5 " to="/">
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div
            className="collapse navbar-collapse ms-auto middleDivStyle "
            id="navbarSupportedContent"
          >
            <div className="nav-item dropdown ms-5 ">
              <a
                className="nav-a dropdown-toggle"
                style={{ textDecoration: "none", color: "#4C525A" }}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul
                className="dropdown-menu HomeBox"
               
                aria-labelledby="navbarDropdown"
              >
                <li  >
                  <a className="dropdown-item p-1">
                    <h5>Bonsai Workflow</h5>
                    <p>
                      Look professional, <br /> win more clients <br />
                      and manage your <br />
                      business from <br />
                      one place
                    </p>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>h1</li>
                    </ul>
                  </a>
                </li>
                <hr />
                <li>
                  <a className="dropdown-item p-3">
                    <h5>Bonsai Tax</h5>
                    <p>
                      Track expenses<br/>, maximize taxs<br/> writeoffs
                      <br />
                      and estimate <br/>taxes without<br/> headache.
                    </p>
                  </a>
                </li>
                <hr />
                <li>
                  <a className="dropdown-item p-3">
                    <h5>Bonsai Cash</h5>
                    <p>
                      Bonsai's is<br/> all-in-one<br/> financial hub:
                      <br />
                      no fess<br/> lightning fast<br/> payouts
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown ms-5">
              <a
                className="nav-a dropdown-toggle"
                href="#"
                style={{ textDecoration: "none", color: "#4C525A" }}
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Templates
              </a>
              <ul className="dropdown-menu templateDropdown" aria-labelledby="navbarDropdown2">
                <li >
                  <a className="dropdown-item p-3 " to="/stays">
                    <img
                      src="https://static.thenounproject.com/png/1021192-200.png"
                      alt=""
                      width="30"
                      height="30"
                    />{" "}
                    Contract Template
                  </a>
                </li>

                <li>
                  <a className="dropdown-item p-3" to="/flight">
                    <img
                      src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg"
                      alt=""
                      width="30"
                      height="30"
                    />{" "}
                    Proposal Template
                  </a>
                </li>

                <li>
                  <a className="dropdown-item p-3" to="/packages">
                    <img
                      src="https://icon-library.com/images/document-icon-png/document-icon-png-0.jpg"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Invioce Template{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-3" to="/packages">
                    <img
                      src="https://icon-library.com/images/icon-template-png/icon-template-png-8.jpg"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Agreement Template{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-3" to="/packages">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru6M8BABzQdwkHA5Ooo4Hr6Qfz6X0r4Rb9E1n5VUofbYz6wAClbyHSmJXHq8Ncm7t1Q&usqp=CAU"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Quotes Template{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-3" to="/packages">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Globe_icon_%28the_Noun_Project_30701%29.svg/1200px-Globe_icon_%28the_Noun_Project_30701%29.svg.png"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Scope of work Template{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-3" to="/packages">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Brief Template{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse ms-auto ms-5 "
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav text-dark  "
                style={{ marginLeft: "30px", color: "#4C525A" }}
              >
                <li className="nav-item p-2   ">
                  <a className="nav-link  " href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item p-2 ">
                  <a className="nav-link  " href="#">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rightDivNavbar">
            <div>
              <button type="button" class="btn btn-outline-primary ">
                Login
              </button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              {" "}
              <button type="button" class="btn btn-success ">
                Start Free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
