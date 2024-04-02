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
            style={{ width: '331.71px', height: '97px', marginLeft: '11px' ,marginTop:'96px'}}
          />
        </div>
        
        <div className=" text-poppins  font-bold leading-38 text-gray-500 mb-4"style={{ width: '230px', height: 'px38', marginLeft: '11px' ,marginTop:'100px',fontSize: '25px',fontWeight:'600'}}>
          <p >All rights reserved</p>
        </div>
      </div>



    
    
    </>
  )
}

export default Footer
