import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx';
import { useState } from 'react';

const Card = (props,index) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="timeline_item">
        <i className={props.icon} ></i>
        <span className="timeline_date">{props.year}</span>
              <div className='timline_de'>
                <h3 className="timeline_title">{props.title}</h3>
                <RxDoubleArrowRight  className={activeIndex === index ? "ii" : "i" }onClick={() => toggleAccordion(index)}/>
          </div>
                {activeIndex === index && (
                <p className="timeline_text">{props.desc}</p>
              )}
    </div>
  )
}

export default Card