import React from 'react'
import "./navbar.css"
import {Link} from "react-scroll"
function Navbar() {
  const mailTo=()=>{
    window.location.assign("mailto:prabhukrishnaofficial@gmail.com");
  }
  return ( 
    <>
    <nav id="nav">
    
    <ul id="list">
    <p id="navHi">DEv<span id="spanhi">  ! ! !</span></p>
      <Link to="navHome" smooth={true} duration={"600ms"}>
      <p class="hi" id="navHome">Home</p>
      </Link>
      <Link to="navSkills" smooth={true} duration={"600ms"}>
      <p class="hi" id="navSkills">Skills</p>
      </Link> 
      <Link to="navEperience" smooth={true} duration={"600ms"}>
      <p class="hi" id="navExperience">Experience</p>
      </Link>       
      <Link to="navContact" smooth={true} duration={"600ms"}>
      <p class="hi" id="navContact">Contact</p>
      </Link>
      <Link to="navResume" smooth={true} duration={"600ms"}>
      <p class="hi" id="navResume">Resume</p>
      </Link>  
      <p class="hi" id="navReach" onClick={mailTo}>Reachme!</p>
      </ul>  
    </nav>
      </>
  )
}

export default Navbar