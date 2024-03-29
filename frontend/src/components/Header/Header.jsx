import React from 'react'
import whatsapp from '../../pictures/whatsapp.png'
import image2 from '../../pictures/image2.png'

import button1 from '../../pictures/button1.png'
import button2 from '../../pictures/button2.png'

import './Header.css'
const Header = () => {
  return (
    <>
      
      <div className='box text-white font-bold align-text-bottom justify-center '>
        <p className='t'> Prices as low as $495 | Unlock your potential on a budget!
           Ends in 4h 32m 20s!.</p>
      </div>
      <div className='content'>
        <div className='inside'>
        
        <img className='hat'src={image2} alt="hat" />
  
        <h1>Empower Your Expertise!</h1>
        <p>“Start, switch or elevate your career with   our Comprehensive Scaled Agile Methodology Courses”</p>
        <div>
        {/* <button className='image-button1'>{button1}</button>
        <button className='image-button2'></button> */}
        <div className='container'>
        <button className='myButton' style={{paddingLeft:"28px"}}>
          View Courses
        </button>
        <button className='myButton'>
          Request a Demo
        </button>
        </div>
        
        <img className="whatsapp" src={whatsapp} alt="WhatsApp Logo" />
       </div>
        </div>
      </div>
    </>
  )
}

export default Header
