import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">

        <div className="about_box">
            <i className="about_icon icon-badge"></i>

            <div>
                <h3 className="about_tittle">Fresher</h3>
                <span className="about_subtitle">Experience</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_tittle">20+</h3>
                <span className="about_subtitle">Project completed</span>
            </div>
        </div>

        

        <div className="about_box">
            <i className="about_icon icon-people"></i>

            <div>
                <h3 className="about_tittle">Online 24/7</h3>
                <span className="about_subtitle">Support</span>
            </div>
        </div>

        {/* <div className="about_box">
            <i className="about_icon icon-badge"></i>

            <div>
                <h3 className="about_tittle">35</h3>
                <span className="about_subtitle">nominees winners</span>
            </div>
        </div> */}
    </div>
  )
}

export default AboutBox