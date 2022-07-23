import React from 'react'
import "./home.css";
import { FiHome } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbFileDollar } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiTask, BiGift, BiSearchAlt2 } from "react-icons/bi";
import { BsWallet, BsLaptop, BsPlayCircle } from "react-icons/bs";
import { TbReceiptTax } from "react-icons/tb";
import { ImFileText2 } from "react-icons/im";
import {
  AiOutlineStar,
  AiOutlineChrome,
  AiOutlineCalendar,
} from "react-icons/ai";

export const Sidebar = () => {
  return (
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
          <div>
            <a href="/home">
              <div className="icons">
                <h3>
                  <FiHome />
                </h3>
              </div>
              <div className="psize">
                <p>Dashboard</p>
              </div>
            </a>
            <a href="/client">
              <div className="icons">
                <h2>
                  <IoIosContacts />
                </h2>
              </div>
              <div className="psize">
                <p>Clients</p>
              </div>
            </a>
            <a href="/projects">
              <div className="icons">
                <h3>
                  <VscFileSubmodule />
                </h3>
              </div>
              <div className="psize">
                <p>Projects</p>
              </div>
            </a>
          </div>
          <div>
            <a href="/proposals">
              <div className="icons">
                <h3>
                  <GrDocumentText />
                </h3>
              </div>
              <div className="psize">
                <p>Proposals</p>
              </div>
            </a>
            <a href="/contracts">
              <div className="icons">
                <h3>
                  <IoNewspaperOutline />
                </h3>
              </div>
              <div className="psize">
                <p>Contracts</p>
              </div>
            </a>
            <a href="/invoices">
              <div className="icons">
                <h3>
                  <TbFileDollar />
                </h3>
              </div>
              <div className="psize">
                <p>Invoices</p>
              </div>
            </a>
          </div>
          <div>
            <a href="/Time Tracking">
              <div className="icons">
                <h3>
                  <MdOutlineWatchLater />
                </h3>
              </div>
              <div className="psize">
                <p>Time Tracking</p>
              </div>
            </a>
            <a href="/Tasks">
              <div className="icons">
                <h3>
                  <BiTask />
                </h3>
              </div>
              <div className="psize">
                <p>Tasks</p>
              </div>
            </a>
          </div>
          <div>
            <a href="/cash">
              <div className="icons">
                <h3>
                  <BsWallet />
                </h3>
              </div>
              <div className="psize">
                <p>cash</p>
              </div>
            </a>
            <a href="/accounting">
              <div className="icons">
                <h3>
                  <ImFileText2 />
                </h3>
              </div>
              <div className="psize">
                <p>Accounting</p>
              </div>
            </a>
            <a href="/taxes">
              <div className="icons">
                <h3>
                  <TbReceiptTax />
                </h3>
              </div>
              <div className="psize">
                <p>Taxes</p>
              </div>
            </a>
          </div>
          <button id="gift">
            <BiGift /> <span>Get One Month Free</span>
          </button>

          <div className="last">
            <AiOutlineStar />
            <span className="star">Upgrade Your plan</span>
          </div>
        </div>
      </div>
  )
}
