import React from 'react'
import image from '../pictures/image 43.png';
const Blogs = () => {
  return (
    <div>
        <div style={{
          width: '100%',
          height: '606px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
            <h3 style={{width:'979px',height:'94px',textAlign:'center',alignItems:'center',fontWeight:'500',fontSize:'32px',fontStyle:'italic',marginTop:'68px',marginLeft:'230px'}}>Expand your horizons into a world of insightful articles and engaging content on our blog</h3>
        </div>
        <p className="mt-52 text-4xl font-normal text-center mb-10 font-prociono  leading-8 tracking-normal w-959 h-36.46 "style={{width:'111px',height:'49px',fontWeight:'400',fontSize:'48px',marginLeft:'664px',marginTop:'126px'}}>Blogs</p>
      
    </div>
  )
}

export default Blogs
