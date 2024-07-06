import React from 'react'
import "./experience.scss"

export default function Experience() {
  const data=[
    {
      id:"1",
      img:"assets/logo-infosys.png",
      desc:"I enjoyed two years at Infosys as a Front End Developer, crafting responsive web interfaces with modern technologies. I focused on meeting client needs and maintaining industry standards",
      title:"Systems Engineer"
    },
    {
      id:"2",
      img:"assets/oltutor.png",
      desc:"For 2 years I have been an online tutor, teaching Science, Math, and English to middle-grade students.I have focused on fostering academic growth and making complex concepts accessible in an engaging online setting.",
      title:"Freelance Online Tutor"
    },
  ];
  return (
    <div className='experience' id="experience">
      <h1>Work <span>Experience</span></h1>
      <div className="container">
        {data.map((d)=>(
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className='left' alt="" />
            <img src={d.img} className='user' alt=""/>
          </div>
          <div className="center">
          {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.title}</h3>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}
