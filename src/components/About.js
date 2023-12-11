import React from 'react'
import { useState } from 'react';
export default function About() {
    const [showMore, setShowMore] = useState(false);
  
    const toggleText = () => {
      setShowMore(!showMore);
    };
  return (
    <>

<div className='abt-container'>
  <div className='abt-title'>
  <h4 className='abt-t'>About us</h4>
  <div id="section">
      <div className="article">
        <p>
          Nekstone industries LLP is stepping towards becoming a global hi-tech manufacturer of premium composite quartz (granite) kitchen sink. We offer a wide range of quartz kitchen sinks.Nekstone product portfolio includes premium composite quartz (granite) kitchen sink available in various colors, sizes, and designs, suitable for application in every elegant kitchen.
          {showMore && (
            <>
             
              <br />
              <br />
              Nekstone is one of the few players in the industry to have successfully innovated and produced the best quality of composite quartz (granite) kitchen sink with a distinct formula to give the sink the desired shape and customized colors.
            </>
          )}
        </p>
      </div>
      <button  className="moreless-button" onClick={toggleText}>
        {showMore ? 'Read less' : 'Read more'}
      </button>
    </div>
  </div>

<div className='abt-image'>
  <img src='about.jpg'/>
  </div>
  </div>
  
  <section className='abt-2'>
<div className='abt-2-image'>
  <img className='value' src='value.png'/>
</div>
<div className='abt-2-title'>
  <h5 className='abt-2-under'>OUR VALUES</h5>
  <p>At nekstone, we believe in building future leaders who innovate, are adaptable for market requirements and create success stories.
Our team is the pillar on which our brand will built.</p>
</div>
  </section>

  <section className='abt-sec3'>
    <h2 className='abt-sec3-under'>CORE <span >VALUES</span></h2>
    <div className='abt-ele'>
      <div className='abt-inno'>
        <img className='solution' src='solution.png'/>
        <h5>Innovation</h5>
        <p>By using state of art technology, we are at the fore front of innovation and have a strong culture of commitment for creating winning results.</p>
        </div>
        <div className='abt-People '>
        <img src='group.png'/>
        <h5>People First</h5>
        
        <p>Be it our esteemed customers, suppliers, trade partners or our nekstone team, we prioritize them before anything.</p>
        </div>
        <div className='abt-Authenticity'>
        <img src='authenticity.png'/>
        <h5>Authenticity</h5>
        
        <p>The brand trust we create through strong and honest nekstone Values. As our name “nek” urdu meaning means virtuous and honest</p>
        </div>
    </div>
    <div className='abt-ele2'>
    <div className='abt-Integrity'>
        <img src='integrity.png'/>
        <h5>Integrity</h5>
        <p>Our commitment to our core values of integrity, fair business practices and ethical standards are unwavering.</p>
        </div>
        <div className='abt-Quality '>
        <img src='utility.png'/>
        <h5>Quality</h5>
        <p>Nekstone has been benchmarked for its resourcefulness in its products and service. </p>
        </div>
    </div>
  </section>
    </>
  )
}
