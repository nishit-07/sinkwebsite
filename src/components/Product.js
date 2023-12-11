import React, { useState,useEffect } from 'react';

 

export default function Product() {

  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const closeImage = () => {
    setShowImage(false);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 27 || event.keyCode === 8) {
      closeImage();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
     <div className='pro-container'>
      
    <span className='pro-title'>
      <h2>our product</h2>
    </span>

      </div> 

      <section className='pro-2'>
        <div className='pro-2-title'>
          <h5>GT COLLECTION</h5>
        </div>
        <div className='pro-2-image' id='slideLeftOnScroll'>
  <p><span style={{color:"brown"}}>|</span> 16"x18"</p>
  <img src='4-removebg-preview.png' style={{height:"300px"}}></img>
</div>

        <div className='pro-2-details'>
          <p><span>SIZE :</span> 457x406x215mm</p>
          <p><span>WEIGHT : </span> 8 Kg.(approx)</p>
        </div>

        <div className='pro-2-meta'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Metalic Series</h6>
          </div>
          <div className='pro-2-m-s'>
            <div className='m-s-1'>
            <img src="white.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='m-s-2'>
            <img src="grey.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='m-s-3'>
            <img src="black.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='m-s-4'>
            <img src="brown.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
        

          <div className='pro-2-gre'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Granite Series</h6>
          </div>

          <div className='pro-2-g-s'>
            <div className='g-s-1'>
            <img src="snow sand.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='g-s-2'>
            <img src="grey sand.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='g-s-3'>
            <img src="ivory sand.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='g-s-4'>
            <img src="moon sand.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
          
 <div className='pro-2-btn'>
 <button className='btn-di' onClick={toggleImage}>
        {showImage ? 'diagram ' : 'diagram'}
      </button>

      {showImage && (
        <div className="image-container" onClick={closeImage}>
          <div className="centered-image">
            <img
              src='16x18.png'
              alt='Your Image'
              className="image"
              width="300"
              height="300"
            />
            <button className="close-button" onClick={closeImage}>
              X
            </button>
          </div>
        </div>
      )}
        &nbsp;&nbsp;&nbsp;
        <button className='btn-di2'>Inquire Now</button>
      </div>
      </section>

      <section className='pro-3'>
      <div className='pro-2-title'>
          <h5>GT COLLECTION</h5>
        </div>
        <div className='pro-2-image' id='slideLeftOnScroll'>
  <p><span style={{color:"brown"}}>|</span> 16"x18"</p>
  <img src='4-removebg-preview.png' style={{height:"300px"}}></img>
</div>
        <div className='pro-2-details'>
          <p><span>SIZE :</span> 457x406x215mm</p>
          <p><span>WEIGHT : </span> 8 Kg.(approx)</p>
        </div>

        <div className='pro-2-meta'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Metalic Series</h6>
          </div>
          <div className='pro-2-m-s'>
            <div className='m-s-1'>
            <img src="white.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='m-s-2'>
            <img src="grey.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='m-s-3'>
            <img src="black.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='m-s-4'>
            <img src="brown.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
        

          <div className='pro-2-gre'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Granite Series</h6>
          </div>

          <div className='pro-2-g-s'>
            <div className='g-s-1'>
            <img src="snow sand.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='g-s-2'>
            <img src="grey sand.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='g-s-3'>
            <img src="ivory sand.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='g-s-4'>
            <img src="moon sand.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
          
 <div className='pro-2-btn'>
 <button className='btn-di' onClick={toggleImage}>
        {showImage ? 'diagram ' : 'diagram'}
      </button>

      {showImage && (
        <div className="image-container" onClick={closeImage}>
          <div className="centered-image">
            <img
              src='4.png'
              alt='Your Image'
              className="image"
              width="300"
              height="300"
            />
            <button className="close-button" onClick={closeImage}>
              X
            </button>
          </div>
        </div>
      )}
        &nbsp;&nbsp;&nbsp;
        <button className='btn-di2'>Inquire Now</button>
      </div>
</section>

      <section className='pro-4'>
      <div className='pro-2-title'>
          <h5>GT COLLECTION</h5>
        </div>
        <div className='pro-2-image' id='slideLeftOnScroll'>
  <p><span style={{color:"brown"}}>|</span> 16"x18"</p>
  <img src='4-removebg-preview.png' style={{height:"300px"}}></img>
</div>
        <div className='pro-2-details'>
          <p><span>SIZE :</span> 457x406x215mm</p>
          <p><span>WEIGHT : </span> 8 Kg.(approx)</p>
        </div>

        <div className='pro-2-meta'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Metalic Series</h6>
          </div>
          <div className='pro-2-m-s'>
            <div className='m-s-1'>
            <img src="white.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='m-s-2'>
            <img src="grey.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='m-s-3'>
            <img src="black.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='m-s-4'>
            <img src="brown.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
        

          <div className='pro-2-gre'>
          <h6><span style={{color:"brown",fontWeight:"bolder"}}>|</span> Granite Series</h6>
          </div>

          <div className='pro-2-g-s'>
            <div className='g-s-1'>
            <img src="snow sand.jpg" alt="Avatar" />
            <p>white</p>
            </div>

            <div className='g-s-2'>
            <img src="grey sand.jpg" alt="Avatar" />
            <p>grey</p>
            </div>

            <div className='g-s-3'>
            <img src="ivory sand.jpg" alt="Avatar" />
            <p>black</p>
            </div>

            <div className='g-s-4'>
            <img src="moon sand.jpg" alt="Avatar" />
            <p>brown</p>
            </div>
          </div>
          
 <div className='pro-2-btn'>
 <button className='btn-di' onClick={toggleImage}>
        {showImage ? 'diagram ' : 'diagram'}
      </button>

      {showImage && (
        <div className="image-container" onClick={closeImage}>
          <div className="centered-image">
            <img
              src='4.png'
              alt='Your Image'
              className="image"
              width="300"
              height="300"
            />
            <button className="close-button" onClick={closeImage}>
              X
            </button>
          </div>
        </div>
      )}
        &nbsp;&nbsp;&nbsp;
        <button className='btn-di2'>Inquire Now</button>
      </div>

      </section>

      <section className='pro-5'>
        <div className=''></div>
      </section>
    </>
  )
}
