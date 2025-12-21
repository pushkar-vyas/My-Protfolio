import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Portfolio = () => {
  const[items ,setItems]= useState(Menu)

  const filterItem = (categoryItem)=>{
    const updatedItems = Menu.filter((curElem)=>{
      return curElem.category === categoryItem
        
      
    })
    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={()=>setItems(Menu)}>Everything</span>
        <span className="work_item" onClick={()=> filterItem("Frontend")}>Frontend</span>
        <span className="work_item" onClick={()=> filterItem("Mern")}>Mern</span>
        {/* <span className="work_item" onClick={()=> filterItem("Creative")}>Creative</span> */}
        {/* <span className="work_item" onClick={()=> filterItem("Art")}>Art</span> */}
        <span className="work_item" onClick={()=> filterItem("Design")}>Design</span>
        
      </div>

      <div className="work_container grid">
        {
          items.map((elem)=>{
            const{id ,image, title, category,about,demo,github} = elem;
            return(
              <div className="work_card" kry={id}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>

                <span className="work_category">{category}</span>
                <span className="work_about">{about}</span>
                <h3 className="work_title">{title}</h3>
                <a href={github} className="work_button">
                  <FaGithub className="icon-link work_button-icon"/>
                </a>
                <a href={demo} className="work_button2">
                <FaArrowUpRightFromSquare className="icon-link work_button-icon"/>
                </a>

              </div>
            )
          })
        }
      </div>
  
  
    </section>
  )
}

export default Portfolio