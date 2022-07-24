import "../Home-afterLogin/home.css";
import { BsLaptop } from "react-icons/bs";
import {AiOutlineChrome,AiOutlineCalendar,} from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { FaFileContract, FaFileInvoice } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { Sidebar } from '../Home-afterLogin/Sidebar';
import { HomeNav } from "../Home-afterLogin/HomeNav";
import TaskComponent  from "./TaskComponent";

export const Tasks = () => {
  return (
    <div id="home">
      {/* sidebar */}
      <Sidebar/>

      {/* navbar */}

      <div id="rightmain">
        <HomeNav/>
        {/* space */}
     <TaskComponent />
        {/* footer */}
        <div id="footer">
          <div className="connect1">
            <ul>
              <li>Feature Requests</li>
              <li>Help Center</li>
              <li>Blog & Resources </li>
              <li>Pricing</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="connect2">
            <span>Bonsai Apps: </span>
            <span className="footlast">
              <GiSmartphone />
            </span>
            <span className="footlast2">iPhone</span>
            <span className="footlast">
              <BsLaptop />
            </span>
            <span className="footlast2">MacOS</span>
            <span className="footlast">
              <GiSmartphone />
            </span>
            <span className="footlast2">Android</span>
            <span className="footlast">
              <AiOutlineChrome />
            </span>
            <span className="footlast2">Chrome</span>
          </div>
          <div className="footlast3">
            <p>
              ©2022 Bonsai Technologies Inc — Payments, banking, and issuing
              services are provided by Stripe Payments Company, Evolve Bank &
              Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively.
              Bonsai is not a law firm, and does not provide legal services,
              advice, or representation. Terms Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};