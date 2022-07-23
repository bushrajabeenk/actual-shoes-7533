import './home.css'
import {FiHome} from 'react-icons/fi'
import {BsPlusSquare} from 'react-icons/bs'
import {IoIosContacts} from 'react-icons/io'
import {VscFileSubmodule} from 'react-icons/vsc'
import {GrDocumentText} from 'react-icons/gr'
import {IoNewspaperOutline} from 'react-icons/io5'
import {TbFileDollar} from 'react-icons/tb'
import {MdOutlineWatchLater} from 'react-icons/md'
import {BiTask,BiGift,BiSearchAlt2} from 'react-icons/bi'
import {BsWallet,BsLaptop,BsPlayCircle} from 'react-icons/bs'
import {TbReceiptTax} from 'react-icons/tb'
import {ImFileText2} from 'react-icons/im'
import {AiOutlineStar,AiOutlineChrome,AiOutlineCalendar} from 'react-icons/ai'
import {FaCrown} from 'react-icons/fa'
import { RiDraftLine } from "react-icons/ri";
import { FaFileContract,FaFileInvoice } from "react-icons/fa";
import {GiSmartphone} from 'react-icons/gi'

export const Home = () => {



  return (
    <div id='home'>
      {/* sidebar */}
      <div id='sidebar'>
        <div id='fst'>
          <div><img src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg" alt="" width="110px"/></div>
          <div><h1><BsPlusSquare className='dsgn'/></h1></div>
        </div>
        <div id='secnd'>
         <div>
         <a href="/home">
          <div className='icons'><h3><FiHome/></h3></div>
          <div className='psize'><p>Dashboard</p></div>
          </a>
          <a href="/client">
          <div className='icons'><h2><IoIosContacts/></h2></div>
          <div className='psize'><p>Clients</p></div>
          </a>
          <a href="/projects">
          <div className='icons'><h3><VscFileSubmodule/></h3></div>
          <div className='psize'><p>Projects</p></div>
          </a>
         </div>
         <div>
         <a href="/proposals">
          <div className='icons'><h3><GrDocumentText/></h3></div>
          <div className='psize'><p >Proposals</p></div>
          </a>
          <a href="/contracts">
          <div className='icons'><h3><IoNewspaperOutline/></h3></div>
          <div className='psize'><p >Contracts</p></div>
          </a>
          <a href="/invoices">
          <div className='icons'><h3><TbFileDollar/></h3></div>
          <div className='psize'><p>Invoices</p></div>
          </a>
         </div>
         <div>
         <a href="/Time Tracking">
          <div className='icons'><h3><MdOutlineWatchLater/></h3></div>
          <div className='psize'><p >Time Tracking</p></div>
          </a>
          <a href="/Tasks">
          <div className='icons'><h3><BiTask/></h3></div>
          <div className='psize'><p >Tasks</p></div>
          </a>
         </div>
         <div>
         <a href="/cash">
          <div className='icons'><h3><BsWallet/></h3></div>
          <div className='psize'><p >cash</p></div>
          </a>
          <a href="/accounting">
          <div className='icons'><h3><ImFileText2/></h3></div>
          <div className='psize'><p >Accounting</p></div>
          </a>
          <a href="/taxes">
          <div className='icons'><h3><TbReceiptTax/></h3></div>
          <div className='psize'><p >Taxes</p></div>
          </a>
         </div>
         <button id='gift'><BiGift/> <span>Get One Month Free</span></button>

         <div className='last'><AiOutlineStar/><span className='star'>Upgrade Your plan</span></div>
        </div>
      </div>


      {/* navbar */}

      <div id='rightmain'>
       <div id='top'>
       <div>
       <span ><BiSearchAlt2 id='searchIcon'/></span>
        <input type='text' placeholder='Search'/>
        </div>
        <div className='crown'>
          <div>
            <button className='b1'><FaCrown/> Start Free Trial</button>
          </div>
          <div>
            <button className='b2'><BsPlayCircle className='play'/></button>   
          </div>
          <div>Start Timer</div>
       </div>
      </div>
      
      <div className='mainBox'>

          <div className='goodMorningDiv'>
            <div>
            <img src="https://app.hellobonsai.com/packs/static/good-night-b72f77cf9b08b00ddf6b.svg" alt="" />
            </div>
            <div className='MorningBox'>
              <p className='one1'>Saturday 23, July 2022</p>
              <p  className='two2'>Good Morning, Name </p>
            </div>
          </div>

          <div id='projectBox'>
            <div className='leftBox paddingBox1 border'>
              <div className='flexing'>
                <div>1</div>
                <div>Create your first Project</div>
              </div>
              <div class="vl"></div>
              
              <div className='flexing'>
                <div>2</div>
                <div>Add company details</div>
              </div>
              <div class="vl"></div>
              
              <div className='flexing'>
                <div>3</div>
                <div>Setup your branding</div>
              </div>
              <div class="vl"></div>
              <div className='flexing'>
                <div>4</div>
                <div>Connect your calendar</div>
              </div>
              <div class="vl"></div>

              <div className='flexing'>
                <div>5</div>
                <div>Connect a bank account</div>
              </div>
            </div>
            <div className='rightBox paddingBox2 border '>
              <div className='calenderBox'>
              <AiOutlineCalendar/>
              {/* Calender Box Logo line 158 */}
              </div>
              <p className='connect'>Connect your calendar</p>
              <p className='connectDet'>Connect your Google Calendar account to receive automated reminders for upcoming invoices and tasks.</p>
              <div className='buttonBox'>
                <button className='buttnn1'>Connect Calender</button>
                <button className='buttnn2'>Next Step</button>
              </div>
            </div>
          </div>

          <div id='projectBox'>
           <div className='rightBox border'>
            <h5 className='righth'>Project Timeline</h5>
            <div className='cont'><p  className='NoCurrent '>No current activity in time frame</p></div>
            </div>
              <div className='leftBox'>
                <div className='draftFlex'>
                  <div><RiDraftLine/></div>
                  <div>Draft a Proposal</div>
                </div>
                <div className='draftFlex'>
                  <div><FaFileContract/></div>
                  <div>Create a Contract</div>
                </div>
                <div className='draftFlex'>
                  <div><FaFileInvoice/></div>
                  <div>Send an Invoice</div>
                </div>
              </div>
          </div>
          
      </div>

     </div>

   </div>
  )
}


 
