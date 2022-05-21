import { React,useState,useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Navbarstyle.css"
import Button from "./Button";

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button,setbutton] = useState(true);
    useEffect(()=>{
        showButton();},[])

   
    const toggleicon=()=>{
        setClick(!click);
    }
    const closenav=()=>{
        setClick(false);
    }
    const showButton=()=>{
        if(window.innerWidth<960){
            setbutton(false);
        }else{
            setbutton(true);
        }
    }
    window.addEventListener(`resize`,showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
       
           {/*  <Router>    */}         
            <Link to="/" className="navbar-logo">
                TWU 
                <i className="fa-solid fa-earth-americas"/>
            </Link>
            <div className="menu-icon" onClick={toggleicon}>
                <i className={click? "fa fa-times":"fa fa-bars"}/>
            </div>
            <ul className={click?"nav-menu active":"nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closenav}>Home</Link>
                    </li>        
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closenav}>Services</Link>
                    </li>        
                    <li className="nav-item">
                        <Link to='/aboutus' className="nav-links" onClick={closenav}>AboutUs</Link>
                    </li>        
                    <li className="nav-item">
                        <Link to='/contactus' className="nav-links" onClick={closenav}>ContactUs</Link>
                    </li>        
                    <li className="nav-item">
                        <Link to='/signup' className="nav-links-mobile" onClick={closenav}>SignUp</Link>
                    </li>       
            </ul>
            {button && <Button className="btns3"
              buttonStyle="btn--primary"
              buttonSize="btn-large">SIGN UP</Button>}

           {/*  </Router> */}
        
        </div>
    </nav>
    </>
  )
}

export default Navbar