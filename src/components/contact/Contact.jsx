import React from 'react'
import "./contact.scss"

export default function Contact() {
  const mailTo=()=>{
    window.location.assign("mailto:prabhukrishnaofficial@gmail.com");
  }
  return (
    <div className='contact' id="contact" >
       <h1 class="hi" id="navReach" onClick={mailTo}>Click to <span>Reach me!</span></h1>
       
    </div>
  )
}
