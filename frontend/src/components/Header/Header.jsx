import React from 'react'
import whatsapp from '../../pictures/whatsapp.png'
import image2 from '../../pictures/image2.png'
import './Header.css'
const Header = () => {
  return (
    <>
      
      <div className='box'>

      </div>
      <div className='content'>
        <div className='inside'>
        
        <img className='hat'src={image2} alt="hat" />
  
        <h1>Empower Your Expertise!</h1>
        <p>“Start, switch or elevate your career with   our Comprehensive Scaled Agile Methodology Courses”</p>
        <div>
        <button className='image-button1'></button>
        <button className='image-button2'></button>
       <img className="whatsapp" src={whatsapp} alt="WhatsApp Logo" />
       </div>
        </div>
      


      </div>
    </>
  )
}

export default Header
