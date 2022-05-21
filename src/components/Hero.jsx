import React from 'react'
import Button from "./Button"
import "./Herostyle.css"
const Hero = () => {
  return (
    <div>
        <div className="hero-container">
           <div className="midpage-text">
               <h1>
               To the world of an incredible vacation
               </h1>
               <h2>
               A Destination For The New Millennium.
               </h2>
           </div>
            <div className="hero-btn">
              
              <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn-large"
              >
              Get Started
              </Button>
              <div className="btns2">
              <Button
              className="btns2"
              buttonStyle="btn--primary"
              buttonSize="btn-large"
              >
                Watch Trailer
              </Button>
              </div>  
            </div>
        </div>
       
    </div>
  )
}

export default Hero