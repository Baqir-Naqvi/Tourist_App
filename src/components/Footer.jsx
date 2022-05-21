import React from 'react'
import Button from './Button'
import './Footerstyle.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newslater to recieve vacation packagefa-spin
            </p>
            <p className="footer-subscription-text">
                We promise to send you only the best vacation packages.
            </p>
            <div className="input-areas">
                <form action=" ">
                    <input 
                    type="email" 
                    name="email"
                    className="footer-input" 
                    placeholder='Your Email' />
                    <Button buttonStyle={'btn--outline'}>
                        Subscribe
                    </Button> 
                </form>
            </div>
        </section>
         <div className="footer-links">
             <div className="footer-links-wrapper">
                 <div className="footer-link-items">
                 <h2>About Us</h2>
                         <Link to='/signup'>How it Works</Link>
                         <Link to='/'>Careers</Link>
                         <Link to='/'>Investors</Link>
                         <Link to='/'>Help Center</Link>
                
                 </div>
             </div>
             <div className="footer-links-wrapper">
                 <div className="footer-link-items">
                        <h2>Social Media</h2>
                         <Link to='/'>Instagram</Link>
                         <Link to='/'>Facebook</Link >
                         <Link to='/'>Twitter</Link>
                         <Link to='/'>Youtube</Link>
                    
                 </div>
             </div>
             <div className="footer-links-wrapper">
                 <div className="footer-link-items">
                        <h2>Terms of Services</h2>
                         <Link to='/'>How it Works</Link>
                         <Link to='/'>Careers</Link>
                         <Link to='/'>Investors</Link>
                         <Link to='/'>Help Center</Link>
                   
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Footer