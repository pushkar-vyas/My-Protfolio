import React from 'react'
import './home.css'
import Me from '../../assets/profile-photo.jpg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import TextChange from "../../assets/TextChanger"

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        
      <div className="home_img-wrapper">
  <img src={Me} alt="Pushkar Vyas" className="home_img" />
</div>
        <h1 className="home_name">Pushkar Vyas</h1>
        
        <span className="home_education">I’m a Web developer</span>
        
        
        <HeaderSocials/>

        <a href="#contect" className="btn"><TextChange className=""/></a>

        <ScrollDown/>

        <Shapes/>


      </div>
    </section>
  )
}

export default Home