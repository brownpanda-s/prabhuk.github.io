import React from 'react'
import "./intro.scss"


export default function Intro() {
  
  return (
    <div className='intro' id="intro">
      <div className="left">
          <div className="imgContainer">
            <img src="assets/me1.png" alt="" />
          </div>
      </div>
      <div className="right">
      <div className="wrapper">
        <h2>Hi!! I am</h2 >
        <h1>Prabhu Krishna</h1>
        <h3> A Frontend  <span >Developer</span></h3>
      </div>
      <a href="#skills">
        <img src='assets/down.png ' alt=""/>
      </a>
      </div>
    </div>

  ) 
}
 