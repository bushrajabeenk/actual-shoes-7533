import "./home.css";
import { BsLaptop } from "react-icons/bs";
import {AiOutlineChrome,AiOutlineCalendar,} from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { FaFileContract, FaFileInvoice } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { Sidebar } from "./Sidebar";
import { HomeNav } from "./HomeNav";

export const Home = () => {
  return (
    <div id="home">
      {/* sidebar */}
      <Sidebar/>

      {/* navbar */}

      <div id="rightmain">
        <HomeNav/>
        <div className="mainBox">
          <div className="goodMorningDiv">
            <div>
              <img
                src="https://app.hellobonsai.com/packs/static/good-night-b72f77cf9b08b00ddf6b.svg"
                alt=""
              />
            </div>
            <div className="MorningBox">
              <p className="one1">Sunday 24, July 2022</p>
              <p className="two2">Good Morning, Saraswati </p>
            </div>
          </div>

          <div id="projectBox">
            <div className="leftBox paddingBox1 border">
              <div className="flexing">
                <div>1</div>
                <div>Create your first Project</div>
              </div>
              <div class="vl"></div>

              <div className="flexing">
                <div>2</div>
                <div>Add company details</div>
              </div>
              <div class="vl"></div>

              <div className="flexing">
                <div>3</div>
                <div>Setup your branding</div>
              </div>
              <div class="vl"></div>
              <div className="flexing">
                <div>4</div>
                <div>Connect your calendar</div>
              </div>
              <div class="vl"></div>

              <div className="flexing">
                <div>5</div>
                <div>Connect a bank account</div>
              </div>
            </div>
            <div className="rightBox paddingBox2 border ">
              <div className="calenderBox">
                <AiOutlineCalendar />
                {/* Calender Box Logo line 158 */}
              </div>
              <p className="connect">Connect your calendar</p>
              <p className="connectDet">
                Connect your Google Calendar account to receive automated
                reminders for upcoming invoices and tasks.
              </p>
              <div className="buttonBox">
                <button className="buttnn1">Connect Calender</button>
                <button className="buttnn2">Next Step</button>
              </div>
            </div>
          </div>

          <div id="projectBox">
            <div className="rightBox border">
              <h5 className="righth">Project Timeline</h5>
              <div className="cont">
                <p className="NoCurrent ">No current activity in time frame</p>
              </div>
            </div>
            <div className="leftBox">
              <div className="draftFlex">
                <div>
                  <RiDraftLine />
                </div>
                <div>Draft a Proposal</div>
              </div>
              <div className="draftFlex">
                <div>
                  <FaFileContract />
                </div>
                <div>Create a Contract</div>
              </div>
              <div className="draftFlex">
                <div>
                  <FaFileInvoice />
                </div>
                <div>Send an Invoice</div>
              </div>
            </div>
          </div>
          <div id="projectBox">
            <div className="rightBox border radius">
              <div className="flex">
                <div className="box1">
                  <h5>Income & Expenses</h5>
                </div>
                <div className="box2">
                  <select className="select">
                    <option value="">INR</option>
                  </select>
                  <select className="select">
                    <option>This Month</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Month</option>
                    <option>Last 3 Month</option>
                    <option>Last 6 Month</option>
                    <option>Last 12 Month</option>
                    <option>This Year</option>
                    <option>last Year</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div className="jan">JAN</div>
                <div className="feb">FEB</div>
                <div className="mar">MAR</div>
                <div className="apr">APR</div>
                <div className="may">MAY</div>
                <div className="june">JUNE</div>
              </div>
              <div className="flex">
                <div className="Outstanding">
                  Outstanding <br /> $0.00
                </div>
                <div className="Overdue">
                  Overdue <br /> $0.00
                </div>
                <div className="Paid">
                  Paid & pending <br /> $0.00
                </div>
                <div className="Other">
                  Other Income <br /> $0.00
                </div>
              </div>
            </div>
            <div className="leftBox">
              <div className="draftFlex2">
                <div className="a">Activity</div>
              </div>
            </div>
          </div>

          <div className="rightBox border lastboxwidth radius">
            <div className="box1">
              <h5>My Upcoming & Overdue Tasks</h5>
            </div>
            <div className="cont">
              <p className="NoCurrent ">No tasks yet.</p>
            </div>
          </div>

          <div className="rightBox border lastboxwidth radius">
            <div className="flex">
              <div className="box1">
                <h5>Time Tracked</h5>
              </div>
              <div className="box2">
                <select className="select">
                  <option value="">INR</option>
                </select>
                <select className="select">
                  <option>This Month</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Month</option>
                  <option>Last 3 Month</option>
                  <option>Last 6 Month</option>
                  <option>Last 12 Month</option>
                  <option>This Year</option>
                  <option>last Year</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <div className="jan">JUL 09</div>
              <div className="feb">JUL 11</div>
              <div className="mar">JUL 13</div>
              <div className="apr">JUL 15</div>
              <div className="may">JUL 17</div>
              <div className="may">JUL 19</div>
              <div className="may">JUL 21</div>
              <div className="june">JUL 23</div>
            </div>
            <div className="flex">
              <div className="Outstanding">
                Unbilled Hours <br />
                00:00:00
              </div>
              <div className="Overdue">
                Unbilled Amount <br />
                $0.00
              </div>
              <div className="Paid">
                Billed Hours <br />
                00:00:00
              </div>
              <div className="Other">
                Billed Amount <br />
                $0.00
              </div>
            </div>
          </div>
        </div>
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