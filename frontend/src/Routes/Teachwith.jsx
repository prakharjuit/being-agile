import React from "react";
import image68 from "../pictures/image 68.png";
import image69 from "../pictures/image 69.png";
import image70 from "../pictures/image 70.png";
import image71 from "../pictures/image 71.png";
import image72 from "../pictures/image 72.png";
import image73 from "../pictures/image 73.png";

const Teachwith = () => {
  return (
    <>
      <div className="bg-box-gray">
        <div
          className=" ml-20 pt-14"
          style={{ width: "100%", height: "761.61px" }}
        >
          <div
            className="text-gray-800 font-prociono text-6xl font-normal leading-none tracking-wide text-left "
            style={{ width: "416px", height: "146px" }}
          >
            <p>Come Teach With Us</p>
          </div>
          <div
            className="font-poppins text-lg font-medium leading-relaxed text-left"
            style={{ width: "330px", height: "77px" }}
          >
            <p>Inspire minds of people by becoming an instructor</p>
          </div>
          <div>
            <button
              className="bg-black text-white font-poppins text-lg font-semibold leading-relaxed text-center"
              style={{ width: "231px", height: "51px" }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      <div className="ml-14">
        <div>
          <p className="w-361 h-49 font-prociono text-4xl font-normal leading-10 text-center mt-20 mb-20">
            You are not alone
          </p>
        </div>
        <div className="flex ml-20">
          <div className="pl-11 ">
            <img className="max-h-96 max-w-96" src={image68} />
          </div>
          <div className="font-inter text-2xl w-96 ml-40 text-blue-900 font-semibold leading-50 text-left text-blue">
            <p className="mt-11">
              Our team is here to guide you on your teaching journey.<br></br>{" "}
              Get started today and experience <br /> support you need to
              thrive.<br></br>
              <u>#JoinourTeam</u>
            </p>
          </div>
        </div>
      </div>
      <div className="ml-20">
        <div>
          <p className="w-361 h-49 font-prociono text-4xl font-normal leading-10 text-center mt-20 mb-20">
            Benefits for Teachers
          </p>
        </div>
        <div className="ml-36">
          <div className="flex">
            <div style={{ width: "200px", height: "180px" }}>
              <img src={image69} />
            </div>
            <div
              className="bg-box shadow-3xl text-center ml-32 mt-14"
              style={{ width: "450px", height: "30px" }}
            >
              <p className="shadow-3xl font-inter pl-6 text-base italic font-semibold text-left text-white leading-15">
                <ul className="shadow-3xl list-disc"><li>Opportunities for professional growth and networking.</li></ul> 
              </p>
            </div>
          </div>
          <div className="flex">
            <div style={{ width: "200px", height: "191px" }}>
              <img src={image70} />
            </div>
            <div
              className="bg-box shadow-[0_35px_60px_-150px_rgba(7,4,4,5.3)] text-center ml-32 mt-14 shadow-3xl"
              style={{ width: "450px", height: "30px" }}
            >
              <p className="font-inter text-base pl-6 italic font-semibold text-left text-white leading-15">
              <ul className="list-disc"><li>Exposure to a wide audience.</li></ul>
              </p>
            </div>
          </div>
          <div className="flex">
            <div style={{ width: "200px", height: "191px" }}>
              <img src={image71} />
            </div>
            <div
              className="bg-box text-center ml-32 mt-14"
              style={{ width: "450px", height: "30px" }}
            >
              <p className="font-inter text-base pl-6 italic font-semibold text-left text-white leading-15">
              <ul className="list-disc"><li>Potential for recognition and rewards.</li></ul>
              </p>
            </div>
          </div>
          <div className="flex">
            <div style={{ width: "200px", height: "191px" }}>
              <img src={image72} />
            </div>
            <div
              className="shadow-lg bg-box text-center ml-32 mt-14"
              style={{ width: "450px", height: "30px" }}
            >
              <p className="font-inter pl-6 text-base italic font-semibold text-left text-white leading-15">
              <ul className="list-disc"><li>Flexibility in creating and delivering content.</li></ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-40 ml-10" >
        <img src={image73} />
      </div>
      <div className="flex justify-center items-center mb-10 mt-11">
        <p className="font-poppins text-5xl font-bold leading-24 text-center">
          Become an instructor today
        </p>
      </div>
      <div className="mb-52 flex justify-center items-center">
        <button
          className="bg-black text-white font-poppins text-lg font-semibold leading-35 text-center"
          style={{ width: "256px", height: "45.5px" }}
        >
          Get Started Today
        </button>
      </div>
    </>
  );
};

export default Teachwith;
