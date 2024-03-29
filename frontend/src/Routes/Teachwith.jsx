import React from 'react'
import image68 from '../pictures/image 68.png'
import image69 from '../pictures/image 69.png'
import image70 from '../pictures/image 70.png'
import image71 from '../pictures/image 71.png'
import image72 from '../pictures/image 72.png'
import image73 from '../pictures/image 73.png'


const Teachwith = () => {
  return (
    <div>
     <div className='bg-box-gray' style={{ width: '100%', height: '761.61px' }}>
              <div className='text-gray-800 font-prociono text-6xl font-normal leading-none tracking-wide text-left ' style={{ width: '416px', height: '146px' }}>
                <p>Come Teach With Us</p>
              </div>
              <div className='font-poppins text-lg font-medium leading-relaxed text-left'style={{ width: '330px', height: '77px' }}>
          <p>Inspire minds of people by becoming an instructor</p>
        </div>
        <div>
          <button className='bg-black text-white font-poppins text-lg font-semibold leading-relaxed text-center' style={{ width: '231px', height: '51px' }}>Get Started Today</button>
        </div>
     </div>
     <div>
      <p  className='w-361 h-49 font-prociono text-4xl font-normal leading-10 text-center mt-20 mb-20'>You are not alone</p>
     </div>
     <div className='flex'>
      <div className='w-666 h-666'>
        <img src={image68}/>

      </div>
      <div className='w-514 h-250 font-inter text-lg font-semibold leading-50 text-left text-bluee'>
          <p className="mt-6">
        Our team is here to guide you on your teaching journey.
Get started today and experience support you need to thrive.<u>#JoinourTeam</u>

        </p>

      </div>
      
     </div>
     <div>
      <p  className='w-361 h-49 font-prociono text-4xl font-normal leading-10 text-center mt-20 mb-20'>Benefits for Teachers</p>
     </div>
     <div>
      <div className='flex'>
        <div style={{ width: '214px', height: '191px' }}>
        <img src={image69}/>

        </div>
        <div className='bg-box w-661 text-center' style={{ width: '661px', height: '60px' }}>
        <p className="font-inter text-base italic font-semibold text-center text-white leading-15">
        Opportunities for professional growth and networking.
        </p>

        </div>

      </div>
      <div className='flex'>
        <div style={{ width: '214px', height: '191px' }}>
        <img src={image70}/>

        </div>
        <div className='bg-box  text-center' style={{ width: '661px', height: '60px' }}>
        <p className="font-inter text-base italic font-semibold text-center text-white leading-15">
        Exposure to a wide audience.
        </p>

        </div>

      </div>
      <div className='flex'>
        <div style={{ width: '214px', height: '191px' }}>
        <img src={image71}/>

        </div>
        <div className='bg-box text-center' style={{ width: '661px', height: '60px' }}>
        <p className="font-inter text-base italic font-semibold text-center text-white leading-15">
        Potential for recognition and rewards.

        </p>

        </div>

      </div>
      <div className='flex'>
        <div style={{ width: '214px', height: '191px' }}>
        <img src={image72}/>

        </div>
        <div className='shadow-md bg-box text-center' style={{ width: '661px', height: '60px' }}>
        <p className="font-inter text-base italic font-semibold text-center text-white leading-15">
        Flexibility in creating and delivering content.


        </p>
          
        </div>

      </div>
     </div>
     <div className='flex justify-center items-center'>
      <img src={image73}/>
     </div>
     <div className='flex justify-center items-center mb-10'>
      <p className="font-poppins text-5xl font-semibold leading-24 text-center">Become an instructor today</p>
      </div>
      <div className='flex justify-center items-center'>
      <button className='bg-black text-white font-poppins text-lg font-semibold leading-35 text-center' style={{ width: '256px', height: '45.5px' }}>Get Started Today</button>

     </div>
    </div>
  )
}

export default Teachwith
