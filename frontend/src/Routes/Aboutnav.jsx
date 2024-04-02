import React from 'react'
import Group41 from '../pictures/Group 41.png'
import Rec41 from '../pictures/Rectangle 41.png'
import Rec42 from '../pictures/Rectangle 42.png'
import Rec43 from '../pictures/Rectangle 43.png'
import Rec44 from '../pictures/Rectangle 44.png'
import Group42 from '../pictures/Group 42.png'
import star from '../pictures/star 1.png'
import service from '../pictures/24-hours-service 1.png'


const Aboutnav = () => {
  return (
    <div>
      <div className='w-100% h-456' ><img src={Group41}style={{width:'100%'}}/></div>
      <div className="flex">
        <div className='w-366 h-450 ml-183'><img  src={Rec41} className="w-366 h-450" /></div>
        <div className='w-618 '><p className="font-poppins italic font-semibold text-lg leading-relaxed">Best Scaled Agile Training From Chicago to the World</p>
        <p>

We at Being Agile Consulting specialize in training only Scaled Agile Courses and in a fun and immersive environment. Our training courses include real-life examples, practical activities, and collaborations that help retain the most out of the online classroom. Even though training has a fixed duration, we don’t stop until you feel confident in your learning. We aim to provide education and learning that resonates with your career growth. Spreading education is our core mission, and so we donate 10% of our overall revenue to education NGOs. Join us for a learning experience. Get in touch at +14845575489 today for details!</p></div>
      </div>
      <div className="flex">
        
        
      <div className='w-366 h-450 ml-183'><img  src={Rec42} className="w-366 h-450" /></div>
      <div className='w-618 '><p className="font-poppins italic font-semibold text-lg leading-relaxed">OK, But... What is Agile?</p>
        <p>


        Simply put, Agile is an approach to project management that comprises iterative and incremental steps to complete projects. That way, it is possible to assess projects within tight schedules and short time frames, with great adaptability. In other words, it allows for quick delivery in short-term development cycles, while also encompassing adaptation to change and collaboration. Here at Being Agile, we truly believe in Agile as not just a methodology but as a way to work akin to a lifestyle. Our training programs cover tried and true strategies and tools with practical hands-on experience that are used to adopt and execute projects the Agile way. Our Team of experts go beyond the scope of traditional trainings and provide you with an immersive experience. Our passion for education & learning is what makes us immensely proud in partnering with education, learning & foundations all across the globe where we have pledged 10% of all training revenue to be donated for Children’s nurturing and education.</p></div>
      </div>
      <div className="flex">
        
        
        <div className='w-366 h-450 ml-183'><img  src={Rec43} className="w-366 h-450" /></div>
        <div className='w-618 '><p className="font-poppins italic font-semibold text-lg leading-relaxed">Our Team of Trainers</p>
          <p>
  
  
          
When it comes to our team of trainers at Being Agile Consulting, they are the exact personification of everything that we stand for. We are determined to provide quality training always. Our professionals have over a decade of experience in the field both setting up processes across different organizations and managing projects in businesses across very distinct areas. That way, our real-world examples brought on our trainings are deeply rooted in our professionals’ own experiences. If you need any help regarding the Agile mindset, BA’s, Scrum, or anything related be sure to contact us today!</p></div>
        </div>
        <div className='w-1440 '><img src={Rec44} /></div>
        <div className='text-center mt-20' ><p className='w-443 font-Prociono text-6xl font-normal leading-14 tracking-wider'>Learn with the best</p> </div>
        <div className='w-949 h-344 flex items-center justify-center mt-20 mb-20'><img src={Group42}/></div>
        <div className='w-298 h-37 flex items-center justify-center mt-20'><p className='font-serif italic font-bold text-5xl leading-37 tracking-wide text-center text-custom-gray'>Amenities </p></div>
        <div className='flex items-center mt-20'>
        <div className='flex items-center '>
    <div><img src={star} className="mr-2"/></div>
    <div className="font-semibold text-lg leading-6 font-poppins">
      worldwide coverage
    </div>
  </div>
          <div className='flex items-center'>
            <div><img src={service} className='mr-2'/></div>
            <div className="font-semibold text-lg leading-6 font-poppins">    24/7 Availability </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutnav
