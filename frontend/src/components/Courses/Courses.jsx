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
    <div className="">
      <p className="mt-52 text-4xl font-normal text-center mb-10 font-prociono  leading-8 tracking-normal w-959 h-36.46 ">
        Courses
      </p>

      <div className="w-96 h-10">
        <img className="rounded-sm" src={group} alt="Group" />
      </div>
      {courseSets.map((set, index) => (
        <div key={index} className="ml-48 w-9/12 grid grid-cols-3 gap-16 mt-28">
          {set.map((course) => (
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

// const Courses = () => {
//   // Splitting courses into sets of three
//   const courseSets = [[...courses.slice(0, 3)], [...courses.slice(3)]];
//   const images = [image1, image2, image3, image4, image5, image6];
//   return (
//     <div>
//       <p className="heading text-4xl mt-80 mb-10 font-prociono font-normal leading-8 tracking-normal text-center w-959 h-36.46 ml-72">
//         Courses
//       </p>
//       <div className="w-96 h-10" >
//         <img src={group} alt="Group" />
//       </div>
//       {courseSets.map((set, index) => (
//         <div key={index} className="flex justify-around mt-8">
//           {set.map(course => (
//             <div key={course.id} className=" flex flex-col items-center w-64 border border-gray-200 rounded-lg p-4 shadow-custom"style={{ width: '317px', height: '292px' ,borderRadius: '20px', borderWidth: '3px'}}>
//                <img src={images[index]} alt="Course" className="w-24 h-24 mb-2" />
//               <h3 className="text-xl font-semibold">{course.title}</h3>
//               <p className="text-gray-600">{` ${course.rating}`}</p>
//               <p className="text-gray-600">{` ${course.price}`}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;
