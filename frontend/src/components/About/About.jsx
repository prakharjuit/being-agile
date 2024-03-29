import React from "react";
import "./About.css";
import about1 from "../../pictures/about1.png";
import about2 from "../../pictures/about2.png";
import about3 from "../../pictures/about3.png";
import about4 from "../../pictures/about4.png";
import about5 from "../../pictures/about5.png";

const About = () => {
  return (
    <div className="about">
      <h1 className="text-3xl mb-1">Why BeingAgile?</h1>
      <div className="flex flex-wrap mb-8 s1 p-10 m-28">
        <div className="">
          <div class="max-w-60 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              className="w-20 ml-20"
              src={about1}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-lg mb-2 text-center">
                Beyond Methodology
              </div>
              <p class="text-gray-700 text-base px-4 text-center">
                Being Agile Offers Courses that transcend traditional
                methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="w-20 ml-20"
            src={about2}
            alt="Sunset in the mountains"
          />
          <div class="max-w-60 rounded-[40px] overflow-hidden shadow-2xl">
            <div class="px-6 py-4">
              <div class="font-bold text-lg mb-2 px-4 text-center">
                Agile lifestyle
              </div>
              <p class="text-gray-700 text-base px-4">
                Embrace Agile as a lifestyle, not just a project management
                approach
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="w-20 ml-20"
            src={about3}
            alt="Sunset in the mountains"
          />
          <div class="max-w-60 rounded-[40px] overflow-hidden shadow-2xl">
            <div class="px-6 py-4">
              <div class="font-bold text-lg mb-2 italic text-center">
                Expert-Led
              </div>
              <p class="text-gray-700 text-base px-4 text-center">
                Learn from a team of indestry experts for comprehensive
                understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="stripe my-32"></div>
      <div className="flex flex-wrap mb-8 s1 p-10 m-28">
        <div class="max-w-60 rounded-[40px] overflow-hidden shadow-2xl">
          <img
            className="w-20 ml-20"
            src={about4}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-lg mb-2 italic text-center">
              Practical Applications
            </div>
            <p class="text-gray-700 text-base px-4 text-center">
              Gain hands-on experience with proven Agile strategis for
              real-world projects
            </p>
          </div>
        </div>
        <div class="max-w-60 rounded-[40px] overflow-hidden shadow-2xl">
          <img
            className="w-20 ml-20"
            src={about5}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-lg mb-2 italic text-center">
              Passinate Education
            </div>
            <p class="text-gray-700 text-base px-4 text-center">
              Our commitment to education ensures a dynamic and impactful
              learning journey.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="stripe my-32 mx-40"></div> */}
        <p className="heading text-4xl p-32 font-prociono font-normal leading-8 tracking-normal text-center w-959 h-36.46 ml-72">
          Our Fundamentals
        </p>
      <div className="fundamentals flex flex-wrap ">
        <div className="flex ml-20">
          <div className="text-center lg:w-1/3 ">
            <p className="font-bold text-xl  ml-12 w-0">
              {" "}
              <ul class=" lg:list-disc marker:text-blue-600">
                <li className="ml-32 mb-5">Vision</li>
              </ul>
            </p>
            <p className="subpara">
              Lead globally in fostering adaptable, collaborative work cultures.
            </p>
          </div>
          <div className=" lg:w-1/3">
            <p className="font-bold text-xl  ml-12 w-0">
              <ul class="list-disc  marker:text-blue-600">
                {" "}
                <li className="ml-32 mb-5">Mission</li>{" "}
              </ul>
            </p>
            <p className="subpara">
              Empower learners with practical Agile skills for real-world
              success.
            </p>
          </div>
          <div className=" lg:w-1/3 ">
            <p className="font-bold text-xl  ml-12 w-0">
              <ul class=" list-disc  marker:text-blue-600">
                <li className="ml-32 mb-5">Values</li>
              </ul>
            </p>
            <p className="subpara ">
              Embrace passion, expertise, & global impact for a united Agile
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
