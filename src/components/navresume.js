import React from 'react'
import { Element } from 'react-scroll'
import "./navresume.css"
function Navresume(){
    const handleDownload=()=>
        {
            const url='/Prabhu Resume.pdf'
            const link=document.createElement('a');
            link.href=url;
            link.setAttribute('download','Prabhu Resume.pdf')
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        };
  return (
    <Element name="navResume" id="resumepage">
        <button onClick={handleDownload} id="downloadbutton">
            Download resume
        </button>
    </Element>
  )
}

export default Navresume