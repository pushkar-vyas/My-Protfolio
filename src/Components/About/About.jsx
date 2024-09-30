import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
import Resume from '../../assets/Pushkar-resume.pdf'

const About = () => {
  return (
    <section className="about container section0" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I am a frontend developer who creates clean, responsive, and user-friendly websites. Check out my projects to see how I turn ideas into engaging web experiences.</p>
            <a download='' href={Resume} className="btn cv">Download CV</a>
          </div>

          {/* <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development </h3>
                <span className="skills_number ">90%</span>
                </div>
                
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX design</h3>
                <span className="skills_number ">80%</span>
                </div>
                
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Web design</h3>
                <span className="skills_number ">60%</span>
                </div>
                
              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <AboutBox/>



    </section>
  

  )
}

export default About