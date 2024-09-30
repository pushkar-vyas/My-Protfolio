import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Pricing from './Components/Pricing/Pricing'
import Contect from './Components/Contect/Contect'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
// import Skills from './Components/Skils/Skils'
// import Skills from './Components/Skills'
import Skills from './Components/Skills/Skills'


const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'> 
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Resume/>
    <Portfolio/>
    {/* <Pricing/> */}
    <Testimonials/>
    {/* <Blog/> */}
    <Contect/>

    </main>
    
    
    
    </>
  )
}

export default App