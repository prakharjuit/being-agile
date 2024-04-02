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
        <p className="heading text-4xl p-32 font-prociono font-normal leading-8 tracking-normal text-center w-959 h-36.46 ml-72">
          Courses
        </p>
        <div className="w-96 h-10">
          <img className="rounded-sm" src={group} alt="Group" />
        </div>
        {courseSets.map((set, index) => (
          <div key={index} className="flex justify-around mt-8">
            {set.map(course => (
              <div key={course.id} className="flex flex-col items-center w-64 border border-gray-200 rounded-lg p-4 shadow-custom" style={{ width: '317px', height: '292px', borderRadius: '20px', borderColor: 'rgba(255, 255, 255, 1)', boxShadow: '7px 7px 14px 0px rgba(28, 98, 164, 1)', borderWidth: '3px' }}>
                <img src={images[index]} alt="Course" className="w-24 h-24 mb-2" style={{ width: '134px', height: '141px' }} />
                <h3 className="text-xl font-bold font-bold text-center">{course.title}</h3>
                <p className="font-bold text-center">{`Rating: ${course.rating}`}</p>
                <p className="text-center text-[rgba(28, 98, 164, 1)]" style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 700, lineHeight: '30px' }}>{`Price: ${course.price}`}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
