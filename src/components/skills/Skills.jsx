import React from 'react'
import "./skills.scss"
import { useState } from 'react';
export default function Skills() {
  const[currentSlide,setCurrentSlide]=useState(0)
  const data =[
    {
      id:"1",
      icon:"./assets/html.png",
      title:"HTML",
      desc: "Skilled in HTML capable of creating well-structured and semantic webpages with a variety of tags and attributes",
      img:"./assets/html-tagst.jpg"
    },
    {
      id:"2",
      icon:"./assets/css.png",
      title:"CSS",
      desc: "I leverage my CSS expertise to design visually appealing and responsive websites. With a keen eye for detail and a passion for creating seamless user experiences, I excel in crafting interfaces that are both beautiful and functional",
      img:"./assets/cssimg.webp"
    },
    {
      id:"3",
      icon:"./assets/js.png",
      title:"JavaScript",
      desc: "I specialize in JavaScript, crafting dynamic web applications that engage users with interactive features. I excel in solving complex problems efficiently, ensuring scalable and robust code.",
      img:"./assets/jsimg.png"
    },
    {
      id:"4",
      icon:"./assets/react.png",
      title:"Reactjs",
      desc:"In React.js, I excel at crafting responsive, modular components for dynamic web applications. My skills include optimizing performance and proficiently managing state for enhanced user interactions.",
      img:"./assets/reactimg.webp"
    },
    {
      id:"5",
      icon:"./assets/redux.png",
      title:"Reduxtoolkit",
      desc: "I specialize in Redux Toolkit for streamlined state management in React.js, ensuring scalable and maintainable applications with predictable data flow.",
      img:"./assets/reduximg.avif",
    }
  ];
  const handleClick=(way)=>{
    way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className='skills' id="skills">
      <div className="slider" style={{ transform :`translateX(-${currentSlide*100}vw)`}}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}
                  </p>
                </div>
                </div>
            <div className="right">
               <img src={d.img} alt=""></img> 
            </div>
          </div>
         </div>
        ))}
      </div>
      <img src='assets/arrow.png' className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src='assets/arrow.png' className='arrow right' alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
