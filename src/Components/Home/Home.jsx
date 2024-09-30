import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import TextChange from "../../assets/TextChanger"

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Pushkar Vyas</h1>
        
        <span className="home_education">I'm a Front-End developer</span>
        
        
        <HeaderSocials/>

        <a href="#contect" className="btn"><TextChange className=""/></a>

        <ScrollDown/>

        <Shapes/>


      </div>
    </section>
  )
}

export default Home