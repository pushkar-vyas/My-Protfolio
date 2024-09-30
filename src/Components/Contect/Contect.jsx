import React from 'react'
import './contect.css'

const Contect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b42766e9-726e-4de8-8405-3b855560fab2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Success",res);
    }
  };
  return (
    <section className="contact container section" id="contect">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contect_title">Let's talk about everything</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
        </div>

        <form action='' onSubmit={onSubmit}  className='contact_form'>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input 
              type="text" 
              className="contact_form-input" 
              placeholder='Insert your name'/>
            </div>

            <div className="contact_form-div">
              <input 
              type="email" 
              className="contact_form-input" 
              placeholder='Insert your email'/>
            </div>
          </div>

          <div className="contact_form-div">
              <input 
              type="text" 
              className="contact_form-input" 
              placeholder='Insert your surname'/>
            </div>

            <div className="contact_form-div contact_form-area">
              <textarea 
              name=""
              id=''
              cols="30"
              rows="10"
              className='contact_form-input'
              placeholder='write your message'
              ></textarea>
            </div>

            <button type='submit' className='btn'>Send Message</button>

          
        </form>
      </div>
    </section>
   
  )
}

export default Contect