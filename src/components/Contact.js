
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

 

  const SendEmail = () => {
    if (!name || !email || !subject) {
      alert('Please fill in all fields');
    } else {
      const mailtoLink = `mailto:nishitjarsaniya@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;

      window.location.href = mailtoLink;
    }
  };
  
  return (
    <>
     <div className='con-1'>
        <div className='con-heading'>
          <img src='contact1-removebg-preview.png'/>

        </div>
          <h2 >Get in touch</h2>
          <p>Reach out and explore the future of innovative products!</p>
        </div> 
  <div className='con-square'>
        <div className='con-square1'>
        <span><FaPhoneAlt/></span>
        <p>Phone</p>
        <button className='con-btn' style={{marginLeft:"22%"}}>Call now!</button>
        </div>
        <div className='con-square2'>
          <span><FaWhatsapp/></span>
          <p>Let's chat</p>
          <button className='con-btn' style={{marginLeft:"24%",marginTop:"3px"}}>Whatsapp</button>
        </div>
        <div className='con-square3'>
          <span><FaEnvelope/></span>
          <p>Send a mail</p>
          <button className='con-btn' style={{marginLeft:"32%"}}>Mail</button>
        </div>
        <div className='con-square4'>
          <span className=''><FaMapMarkerAlt/></span>
          <p>map</p>
          <button className='con-btn' style={{marginLeft:""}}>Find out</button>
        </div>
</div>
<section className='con-sec-3'>
<div className='con-image'>
  <img src="pngaaa.com-4605958.png" alt='not'/>
</div>
  <div class="container--">
    <form action="#"  class="contact-form">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"  value={name} onChange={handleNameChange} required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"  value={email} onChange={handleEmailChange} required/>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="subject" name="message" rows="4"  value={subject} onChange={handleSubjectChange} required></textarea>
      </div>
      <button className='btn-s' type="submit" onClick={SendEmail}>Submit</button>
    </form>
  </div>



</section>
    </>
  )
}

