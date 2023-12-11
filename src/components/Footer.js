import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact, FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaEnvelopeOpen, FaPhone, FaYoutube, FaTwitter, FaTwitterSquare, FaRegEnvelope, FaMapMarkedAlt, FaMapMarker } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
    <section id="footer">
  <div class="main-footer">
    <div class="logoinfo" data-aos="fade-up">
      

      <div class="contact-details">
        <h1 className='half-underline'>Contact Us</h1>
        <li>
          <div class="fa fa-phone"></div><a href="tel:+919326048690"><FaPhone/> +91 0987654321</a></li>
        <li>
        <a href="mailto:yourmail@gmail.com"><FaRegEnvelope/> limestone@gmail.com</a></li>
        <li ><a href=""><FaMapMarker/> Morbi</a></li>
        
    </div>
  </div>
  <div class="com " data-aos="fade-up">
    <h1 className='half-underline'>About</h1>
    <ul>
      <li><a className='A' href="/">Home</a></li>
      <li><a className='A' href="/Product"> Product</a></li>
      <li><a className='A' href="About">About Us</a></li>
      <li><a className='A' href="/Contact">  Contact Us</a></li>
    </ul>
  </div>

  <div class="info" data-aos="fade-up">
    <h1 className='half-underline'>Social Media</h1>
    <div class="sociallogos">
      <div class="logobox">
        <a className='insta'  href="#" class="fa fa-instagram"><FaInstagram/></a>
        <a className='yt' href="#" class="fa fa-linkedin"><FaYoutube/></a>
        <a className='fb' href="#" class="fa fa-facebook"><FaFacebook/></a>
        <a className='fb' href="#" class="fa fa-facebook"><FaTwitter/></a>
        {/* <a href="#" class="fa fa-youtube-play"></a> */}
      </div>
    </div>
  </div>
 </div>
 <div className='copy'>
      <hr/>
        <p>Copyright © 2023 nishit:All Right Reserved</p>
      </div>
</section>

    </>
  
)
}
