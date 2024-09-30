import React from 'react'
import './resume.css'
import Data from './Data'
import Card from './Card'
// import { useState } from 'react'
import edu from '../../assets/edu.png'

const Resume = () => {
  
  
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section_title">Education</h2>

      <div className="resume_container grid">
      <img
          className="im "
          src={edu}
          alt="Graduation"
        />
        <div className="timeline grid">
          {
            Data.map((val,index)=>{
              
              return(
                <Card
                 key={index}
                 icon={val.icon} 
                 title={val.title} 
                 year={val.year} 
                 desc={val.desc}
                 />
              )
              
            })
          }

        </div>

        
      </div>
    </section>
  )
}

export default Resume