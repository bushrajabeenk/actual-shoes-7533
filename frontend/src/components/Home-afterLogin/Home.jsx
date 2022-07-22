import "./Home.css";
import { FiHome } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";

export const Home = () => {
  return (
    <div>
      <div id="sidebar">
        <div id="fst">
          <div>
            <img
              src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
              alt=""
              width="110px"
            />
          </div>
          <div>
            <h1>
              <BsPlusSquare className="dsgn" />
            </h1>
          </div>
        </div>
        <div id="secnd">
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
          <a href="#dashboard">
            <div>
              <h3>
                <FiHome />
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "15px" }}>Dashboard</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
