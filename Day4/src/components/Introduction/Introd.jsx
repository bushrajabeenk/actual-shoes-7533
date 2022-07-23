import React from 'react'
import "./Introd.css"

const Introd = () => {
  return (
    <>
    <div className='mainContainer'>
            <div className='leftDivFinancial'>
                <div>
                <h1>Everything you need to<br/>
                 run your freelance<br/> business.</h1>
                  <br/>
                  <h4>Bonsai’s all-in-one product suite with smart <br/> automation lets you focus on your passion, not<br/> your paperwork.
                  </h4>
                  <br></br>
                  <br></br>

                  <input type="text" placeholder='Enter Your email'/>
                  <button>START FREE</button>

                </div>

            </div>
            <div className='rightDivFinancial'>

            </div>
    </div>
    <br/>
    <br/>
    <div className='comparisionDiv'>
      <h2>Make More, Manage Less</h2>
      <br/>
      <br/>
      <p style={{fontSize:"20px"}}>Bonsai integrates and automates every step of your business so it<br/> runs seamlessly - from proposal to tax season.</p>
       <br/>
      <div className='withWithout'>
        <div>
           <h3>Without Bonsai</h3>
           <br/>
           <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg'/>
        </div>
        <div>
          <h3>With Bonsai</h3>
          <br/>
          <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg'/>

        </div>

      </div>

    </div>
    
    </>
  )
}

export default Introd
