import React from 'react'
import group33 from '../../pictures/Group 33.png'
import group4 from '../../pictures/Group 4.png'

const AboveFooter = () => {
  return (
    <>
       <div class="  flex items-center justify-center h-screen mb-154">
  <div class="grid place-items-center">
    <p class="  w-668 h-49 text-4xl font-normal leading-7 tracking-normal text-left">
      How can Agile make you faster?
    </p>
  </div>
</div>

<div className='mt-154 w-840 h-418 flex items-center justify-center mb-272'>
  <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/i_yLpCLMaKk'
    title='YouTube Video'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
  ></iframe>
</div>
<div className="flex items-center mb-272 ml-236">
        <div className="flex items-center ml-236">
          <img
            src={group33}
            className="mr-4 border-solid border-gray-500"
            alt="Group 33"
            style={{ width: '177px', height: '235px' }}
          />
            <img
            src={group4}
            className="mr-4 border-solid border-gray-500"
            alt="Group 33"
            style={{ width: '177px', height: '235px' }}
          />
          <div className="w-413 h-30 text-xl">
            Become an Instructor
          </div>
        </div>
        
        <div className="ml-4 flex-1">
          Embark on a rewarding journey as an instructor with Being Agile – where we empower educators to inspire transformative learning experiences, cultivating a community that embraces Agile principles as a way of life.
        </div>
      </div>
<div>

     <p className='connect'>Lets Connect!</p>
     <div className='stripe'>Contact us </div>
     </div>
    </>
  )
}

export default AboveFooter
