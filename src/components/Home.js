import React, { useState, useEffect } from 'react';
export default function Home() {
 

  
  return (
    
    <>
    

    <div>
<div id="slider">
<figure>
<img style={{height:"500px"}} src="2.png"  alt/>
<img style={{height:"500px"}} src="3.png"  alt/>
<img style={{height:"500px"}} src="4 (1).png"  alt/>
<img style={{height:"500px"}} src="4.png"  alt/>
<img style={{height:"500px"}} src="4 (2).png"  alt/>
</figure>
</div>
</div>

<section className='home-sec2'>
<div class="wave">
  <div className='home-h4'>
    <h4 >AVAILABLE <span style={{color:"blue"}}>COLOR</span> </h4>
    </div>


  <div className='home-2-meta'>
          <h5 className='home-2-meta-under'> Metalic <span style={{color:"blue"}}>Series</span> </h5>
          </div>

  <div className='home-2-m-s'>
            <div className='h-m-s-1'>
            <img src="white.jpg" alt="Avatar" />
           
            </div>
           

            <div className='h-m-s-2'>
            <img src="grey.jpg" alt="Avatar" />
            </div>

            <div className='h-m-s-3'>
            <img src="black.jpg" alt="Avatar" />
            </div>

            <div className='h-m-s-4'>
            <img src="brown.jpg" alt="Avatar" />
            </div>
            
              <div className='home-2-m-set'>
                <p>WHITE</p>
                <p>GREY</p>
                <p>BLACK</p>
                <p>BROWN</p>


              </div>
            
            </div>
            <div className='home-2-gre'>
          <h5 className='home-2-gre-under'> Granite <span style={{color:"blue"}}>Series</span></h5>
          </div>

          <div className='home-2-g-s'>
            <div className='h-g-s-1'>
            <img src="snow sand.jpg" alt="Avatar" />
            </div>

            <div className='h-g-s-2'>
            <img src="grey sand.jpg" alt="Avatar" />
            </div>

            <div className='h-g-s-3'>
            <img src="ivory sand.jpg" alt="Avatar" />
            </div>

            <div className='h-g-s-4'>
            <img src="moon sand.jpg" alt="Avatar" />
            </div>
            <div className='home-2-p'>
              <div className='home-2-g-set'>
                <p>SNOW <br/>SAND</p>
                <p>GREY <br/>SAND</p>
                <p>IVORY<br/>SAND</p>
                <p>MOON <br/>SAND</p>


              </div>
            </div>
          </div>
          </div>
</section>

<section className='home-sec-3'>
  <div className='wave2'>
  <div className='home-sec-3-title'>
<h4>TECHNICAL <span style={{color:"blue"}}>PROPERTIES</span></h4>
  </div>
<div className='t-p'>
<div className='t-p-1'>

  <img src='easytoclean.png'/>
  <p>EASY TO CLEAN</p>

</div>
<div className='t-p-2'>

  <img src='stain resistant.png'/>
  <p>STAIN RESISTANT</p>

</div>

<div className='t-p-3'>

  <img src='hygeinic.png'/>
  <p>HYGENIC</p>

</div>
<div className='t-p-4'>

  <img className='round-image' src='ever lasting.png'/>
  <p>EVER LASTING</p>

</div>
<div className='t-p-5'>

  <img src='heat resistant.png'/>
  <p>HEAT RESISTANT</p>

</div>
<div className='t-p-6'>

  <img src='durable.png'/>
  <p>HIGH DURABILITY</p>

</div>
<div className='t-p-7'>

  <img src='certified quality.png'/>
  <p>CERTIFIED QUALITY</p>

</div>
</div>
</div>
</section>

<section className='home-sec-4'> 
<div className='home-sec-4-title'>
<h5>INSTAL<span style={{color:"blue"}}>LATION</span></h5>
</div>
<div className='home-ins-image'>
  <div className='home-ins-image-1'>
    <img src='topmount.jpg'></img>
    <p>TOPMOUNT</p>
  </div>
  <div className='home-ins-image-2'>
    <img src='flushmount.jpg'></img>
    <p>FLUSHMOUNT</p>

  </div>
  <div className='home-ins-image-3'>
    <img src='undermount.jpg'></img>
    <p>UNDERMOUNT</p>

  </div>
</div>
</section>
    </>
  )
}
