import React from "react";
import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="p-5 bg-gray-100">
      {/* Search Bar */}

      <div className="flex items-center bg-white shadow-md rounded-lg p-3 mb-5">
        {/* Search Icon */}
        <FiSearch className="text-gray-500 mr-2" size={20} />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search your course here..."
          className="flex-grow outline-none"
        />

        {/* Arrow Icon for triggering search */}
        <button
          className="ml-2 p-2 bg-purple-500 text-white rounded-full"
          aria-label="Search"
        >
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Banner */}
      <div className="relative bg-purple-200 rounded-lg p-8 flex justify-between items-center mb-10">
        <div>
          <p className="text-white text-sm uppercase mb-2">Online Course</p>
          <h1 className="text-white text-3xl font-semibold mb-5">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Join Now
          </button>
        </div>
        {/* Dummy Image */}
        <div>
          <img
            src="https://via.placeholder.com/200"
            alt="Course Banner"
            className="w-48"
          />
        </div>
      </div>

      {/* Course Cards */}
      <div className="flex justify-between space-x-5">
        <CourseCard watched="8/15" title="Front-end" />
        <CourseCard watched="3/14" title="Back-end" />
        <CourseCard watched="2/6" title="Product Design" />
        <CourseCard watched="9/10" title="Project Manager" />
      </div>
    </div>
  );
};

const CourseCard = ({ watched, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center justify-between">
      {/* Icon on the left */}
      <div className="flex items-center">
        <div className="mr-3 bg-purple-100 p-2 rounded-full">
          <BsBell className="text-purple-500" size={24} />
        </div>

        {/* Content in the middle */}
        <div className="text-left">
          <p className="text-gray-500 text-xs mb-1">{watched} Watched</p>
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
      </div>

      {/* Three dots icon on the right */}
      <div>
        <FiMoreVertical className="text-gray-500" size={20} />
      </div>
    </div>
  );
};

export default Banner;
