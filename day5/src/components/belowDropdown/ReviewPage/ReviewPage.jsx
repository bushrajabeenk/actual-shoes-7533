import React from 'react'
import "./reviewPage.css"

const ReviewPage = () => {
  
     
 

  return (
    <>
    <h2 style={{textAlign : "center"}}>Don't just take it from us.</h2>
    <br/>
    <br/>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img src="https://as2.ftcdn.net/v2/jpg/04/28/08/65/1000_F_428086564_T1u4jL4Cku0nRp7PaeOAzeTphM00Utxo.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5888e1f5f34690422d33efce_david-mihm.jpg' style={{height:"300px", marginBottom :"5%", borderRadius:"10px"}}/>
        
      <p >"For all my Freelancer / Small Agency followers,<br/> I wish I’d discovered @bonsaiinc long ago<br/> - great templated contract"</p>
        <b><h4>David Mihm</h4></b>
        <p>Founder of TidingsCo</p>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/04/28/08/65/1000_F_428086564_T1u4jL4Cku0nRp7PaeOAzeTphM00Utxo.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5888e56ffe81b74722a25aa8_DavidUrbinati.jpg' style={{height:"300px", marginBottom :"5%", borderRadius:"10px"}}/>
      <p>"@bonsaiinc is probably my all time favorite freelance tool.<br/> hands down. the team is super responsive and<br/> accessible when i have questions."</p>
       <b><h4>David Urbinati</h4></b> 
       <p>Motion design / animation</p>

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/04/28/08/65/1000_F_428086564_T1u4jL4Cku0nRp7PaeOAzeTphM00Utxo.jpg" className="d-block w-100" alt="..."/>
      
      <div className="carousel-caption d-none d-md-block">
      <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/588913c6065c48675c827252_nat.jpg' style={{height:"300px", marginBottom :"5%", borderRadius:"10px"}}/>
       <p>"Anyone doing #freelance work should use<br/> @bonsaiinc for contracts/payment. It's<br/> amazing and saves boatloads of time."</p>
       <b><h4>Nathanael Smith</h4></b>
       <p>Product Design</p>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/04/28/08/65/1000_F_428086564_T1u4jL4Cku0nRp7PaeOAzeTphM00Utxo.jpg" className="d-block w-100" alt="..."/>
      
      <div className="carousel-caption d-none d-md-block">
      <img src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/588913ce796cb37d4ddfa28e_jold.jpg' style={{height:"300px", marginBottom :"5%", borderRadius:"10px"}}/>
       <p>"Wow, @bonsaiinc's contracts are completely wonderful.<br/> If you freelance you have to check it out.<br/> Really lovely experience. h/t @hemeon"</p>
       <b><h4>Jon Gold</h4></b>
       <p>Designer and engineer</p>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>
<br/>
<br/>

<div className='smallDivBottomUp'>
  <div><h3>It’s your business.<br/>We’re here to help it grow.</h3></div>
  <div> <button type="button" className="btn btn-success successBtn ">Start Free</button></div>

</div>
   
    
    </>
  )
}

export default ReviewPage

