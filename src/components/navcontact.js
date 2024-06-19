import React from 'react'
import { Element } from 'react-scroll'
import "./navcontact.css"
function Contact() {
  return (
    <Element name="navContact" id="contactpage">
      <div id="c1ntact">Contact
      </div>
      <p className="cnt" id="mail">Email: <span>prabhukrishnaofficial@gmail.com</span></p>
      <p className="cnt" id="in">LinkedIn: <span>linkedin.com/in/prabhu-krishna-07101a169</span></p>
      
    </Element>
    
  )
}

export default Contact