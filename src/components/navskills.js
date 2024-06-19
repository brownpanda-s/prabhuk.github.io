import React from 'react'
import { Element } from 'react-scroll'
import "./navskills.css"
import LinearProgress from '@mui/material/LinearProgress';

const Navskills = () => {
  return (
    <Element name="navSkills" id="skillspage">
    <h5 id="skilltxt">SKILLSET</h5>
    <div id="sliders"> 
    <div className='htmlSlider' id="slidergap">
        <p>HTML</p>
        <LinearProgress variant="determinate" className="bar" color="inherit" value={90}></LinearProgress>
    </div>
    <div className='cssSlider' id="slidergap">
        <p>CSS</p>
        <LinearProgress variant="determinate" className="bar" value={60} color="inherit"></LinearProgress>
    </div>    
    <div className='reactSlider' id="slidergap">
        <p>React</p>
        <LinearProgress variant="determinate" className="bar" color="inherit" value={80}></LinearProgress>
    </div>
    <div className='reduxSlider' id="slidergap">
        <p>React-Redux/toolkit</p>
        <LinearProgress variant="determinate" value={75}  color="inherit" className="bar"></LinearProgress>
    </div>
    <div className='windSlider id="slidergap"'>
        <p>TailWind</p>
        <LinearProgress variant="determinate" value={55}  color="inherit" className="bar"></LinearProgress>
    </div>
    </div>

    </Element>
  )
}

export default Navskills