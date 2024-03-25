import React from 'react'
import './Footer.css'
import group33 from '../../pictures/Group 33.png'
import group4 from '../../pictures/Group 4.png'
import logo from '../../pictures/logo.png'
import foot from '../../pictures/foot.png'
const Footer = () => {
  return (
    <>
    
     
     <div className="flex justify-between items-end mt-272">
        <div>
          <img
            src={logo}
            className="mb-4 ml-4"
            alt="Logo"
            style={{ width: '331.71px', height: '97px', marginLeft: '11px' }}
          />
        </div>
        
        <div className="w-230 h-38 text-poppins text-25 font-semibold leading-38 text-gray-500 mb-4">
          All rights reserved
        </div>
      </div>



    
    
    </>
  )
}

export default Footer
