import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ContinueWatching = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "Frontend",
      imgSrc: "https://via.placeholder.com/300x150.png?text=Frontend+Course",
      progress: 124,
      avatarCount: 3,
    },
    {
      id: 2,
      title: "Beginner's Guide To Becoming A Professional Backend Developer",
      category: "Backend",
      imgSrc: "https://via.placeholder.com/300x150.png?text=Backend+Course",
      progress: 27,
      avatarCount: 2,
    },
    {
      id: 3,
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "Frontend",
      imgSrc: "https://via.placeholder.com/300x150.png?text=Course+Image",
      progress: 67,
      avatarCount: 4,
    },
    // New Cards
    {
      id: 4,
      title: "Advanced React Concepts for Developers",
      category: "Frontend",
      imgSrc: "https://via.placeholder.com/300x150.png?text=React+Course",
      progress: 90,
      avatarCount: 5,
    },
    {
      id: 5,
      title: "Node.js: Building Scalable Backend Applications",
      category: "Backend",
      imgSrc: "https://via.placeholder.com/300x150.png?text=Node.js+Course",
      progress: 55,
      avatarCount: 4,
    },
    {
      id: 6,
      title: "Full-Stack JavaScript Developer Guide",
      category: "Full Stack",
      imgSrc: "https://via.placeholder.com/300x150.png?text=Full+Stack+Course",
      progress: 78,
      avatarCount: 6,
    },
  ];

  return (
    <div className="p-5 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <div className="flex space-x-3">
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronLeft size={20} />
          </button>
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const { title, category, imgSrc, progress, avatarCount } = course;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      {/* Image Section */}
      <div className="relative">
        <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
        <IoEllipsisHorizontalCircleSharp className="absolute top-3 right-3 text-white text-xl" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-purple-500 text-sm font-semibold mb-1">{category}</p>
        <h3 className="text-md font-semibold mb-2">{title}</h3>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-1 rounded-full mb-3">
          <div
            className="bg-purple-500 h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Avatars and Progress */}
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {/* Avatars */}
            {Array(avatarCount)
              .fill(" ")
              .map((_, idx) => (
                <img
                  key={idx}
                  src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
          </div>
          <div className="flex items-center space-x-1">
            <BsFillPersonFill className="text-gray-500" />
            <span className="text-sm text-gray-500">{`+${progress}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
