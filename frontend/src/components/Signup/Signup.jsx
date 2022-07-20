import React from 'react'
import './Signup.css'
import { FaQuoteLeft } from 'react-icons/fa';

export const Signup = () => {
  return (
    <div>
      <div id='main'>
      <div id='bonsai'>
       <div>
       <img src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg" alt="" width="100px" />
        <h5>Join 500,000+ freelancers and <br /> agencies using Bonsai.</h5>
       </div>
       <div>
         <FaQuoteLeft className='quote'/> <br />
        <p style={{lineHeight:"15px"}}>Anyone doing #freelance work should <br /> use @bonsaiinc for contracts/payment. <br /> It's amazing and saves boatloads of time. br
        Nathanael Smith, Product Designer</p>
       </div>
      </div>

      <div id='bonsaiFree'>
        <h2>Try Bonsai free with your <br /> Workflow today</h2>
        <input type="text" id='ggl' placeholder='Sign Up with Google' style={{width:"250px", marginTop:"15px"}}/><br />
        <p style={{textAlign:"center"}}>or</p> <br />
        <div style={{marginTop:"-30px"}}>
        <p >EMAIL</p><br />
        <input type="text" placeholder='Your @ email.com' className='boxess'/><br />
        <p >FULL NAME</p><br />
        <input type="text" placeholder='Jane Smith' className='boxess'/><br />
        <p >PASSWORD</p><br />
        <input type="text" placeholder='.......' className='boxess'/>
        <p>Your password must be at least 6 charracters</p>
        <div id='select'>
         <div>
           <p>COUNTRY</p>
            <select className="select">
              <option value="">Afghanistan</option>
              <option value="">Brazil</option>
              <option value="">Canada</option>
              <option value="">Denmark</option>
              <option value="">Egypt</option>
              <option value="">India</option>
              <option value="">Pakistan</option>
            </select>
          </div>
        <div>
          <p>CURRENCY</p>
          <select className="select">
              <option value="">AFN</option>
              <option value="">BRL</option>
              <option value="">CAD</option>
              <option value="">DKK</option>
              <option value="">EGP</option>
              <option value="">INR</option>
              <option value="">PGK</option>
            </select>
        </div>
        </div>
        <p style={{textAlign:"center"}}><u>Term and Conditions</u></p>
        <button className='account'>Create Free Account</button>
        <p style={{textAlign:"center"}}>Already have an account?</p>
        <button  className='login'>Login</button>
      </div>
      </div>
      </div>
      <div className='contact'>
      <ul>
        <li>Contact Us</li>
        <li>Help Center</li>
        <li>About Us</li>
        <li>Plans & Pricing</li>
        <li>Privacy policy</li>
      </ul>
      <p style={{lineHeight:"20px"}}>©2022 Bonsai Technologies Inc — Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice, or representation.   Terms    Credits</p>
      </div>
    </div>
  )
}

