import React from 'react';
import './About.css';
import about1 from '../../pictures/about1.png';
import about2 from '../../pictures/about2.png';
import about3 from '../../pictures/about3.png';
import about4 from '../../pictures/about4.png';
import about5 from '../../pictures/about5.png';

const About = () => {
  return (
    <div className="about">
      <h1 className="text-3xl font-bold mb-4">Why BeingAgile?</h1>
      <div className="flex flex-wrap mb-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <img src={about1} alt="About 1" className="w-full h-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Beyond Methodology</h3>
          <p>Being Agile offers courses that transcend traditional methodologies.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <img src={about2} alt="About 2" className="w-full h-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Agile lifestyle</h3>
          <p>Embrace Agile as a lifestyle, not just a project management approach.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <img src={about3} alt="About 3" className="w-full h-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Expert-Led</h3>
          <p>Learn from a team of industry experts for comprehensive understanding.</p>
        </div>
      </div>
      <div className="stripe my-8"></div>
      <div className="flex flex-wrap mb-8">
        <div className="w-full sm:w-1/2 p-4">
          <img src={about4} alt="About 4" className="w-full h-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Practical Applications</h3>
          <p>Gain hands-on experience with proven Agile strategies for real-world projects.</p>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img src={about5} alt="About 5" className="w-full h-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Passionate Education</h3>
          <p>Our commitment to education ensures a dynamic and impactful learning journey.</p>
        </div>
      </div>
      <div className="stripe2 my-8"></div>
    

<div className="fundamentals">
  <p className="heading text-4xl mb-4 font-prociono font-normal leading-8 tracking-normal text-center w-959 h-36.46">Our Fundamentals</p>
  <div className="flex flex-wrap grid-cols-3">
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <p className="subhead text-xl mb-2 w-126 h-36.46">Vision</p>
      <p className="subpara w-293 h-117">Lead globally in fostering adaptable, collaborative work cultures.</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4 w-293">
      <p className="subhead text-xl mb-2 w-959 h-36.46">Mission</p>
      <p className="subpara w-293 h-117">Empower learners with practical Agile skills for real-world success.</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <p className="subhead text-xl mb-2 w-959 h-36.46">Values</p>
      <p className="subpara w-293 h-117">Embrace passion, expertise, & global impact for a united Agile community.</p>
    </div>
  </div>
</div>






      
    </div>
  );
};

export default About;
