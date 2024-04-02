import React from "react";
import "./cou.css";
import courses from "./courses.json";
import group from "../../pictures/Group 67.png";
import image1 from "../../pictures/image 5.jpg";
import image2 from "../../pictures/image 6.png";
import image3 from "../../pictures/image 7.png";
import image4 from "../../pictures/image 8.png";
import image5 from "../../pictures/image 9.png";
import image6 from "../../pictures/image 10.png";

const Courses = () => {
  // Splitting courses into sets of three
  const courseSets = [[...courses.slice(0, 3)], [...courses.slice(3)]];
  const images = [image1, image2, image3, image4, image5, image6];
  
  return (
    <div>
      <div className='w-50%'>
        <p className="heading text-4xl p-32 font-prociono font-normal leading-8 tracking-normal text-center w-959 h-36.46 ml-72"></p>
      </div>
      <div className="">
        <p className="mt-52 text-4xl font-normal text-center mb-10 font-prociono  leading-8 tracking-normal w-959 h-36.46 ">
          Courses
        </p>
      </div>
      <div className="w-96 h-10">
        <img className="rounded-sm" src={group} alt="Group" />
      </div>
      {courseSets.map((set, index) => (
        <div key={index} className="flex justify-around mt-8">
          {set.map(course => (
           <div
           key={course.id}
           className="shad rounded-2xl bg-white p-4 px-0  mx-0 hover:shadow-2xl"
         >
           <img
             src={images[index]}
             alt="Course"
             className="w-24 h-24 mx-auto mb-2 "
           />
           <h3 className="text-xl font-semibold text-center pt-4">
             {course.title}
           </h3>
           <p className="text-gray-600 text-center pt-4">
             <span className="font-bold">{course.rating}</span>
           </p>
           <div className="grid grid-cols-2 gap-28">
           <p className="text-blue-600   underline text-left pl-4 pt-4">{course.price}</p>
           <a href="#" class="hover:bg-slate-200 border-solid mt-2 rounded-lg border-2 border-black border-spacing-0 p- m-0 w-14 h-8">View</a></div>

         </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;
