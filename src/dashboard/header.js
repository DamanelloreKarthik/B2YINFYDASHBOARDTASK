import React from "react";
import {
  FaPlus,
  FaRegFileAlt,
  FaQuestionCircle,
  FaExchangeAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex flex-col p-4 bg-gray-50">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Added margin-bottom for spacing */}
        <h5 className="font-semibold">Proposals</h5>
        <div className="flex items-center space-x-4  cursor-pointer">
          <button className="p-2 border rounded-lg bg-white hover:bg-gray-100  cursor-pointer">
            <FaExchangeAlt />
          </button>
          <button className="p-2 border rounded-lg  bg-white hover:bg-gray-100  cursor-pointer">
            <FaQuestionCircle />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center space-x-4">
        {/* New Proposals Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700  cursor-pointer">
          <FaPlus className="text-white" />
          <span>New Proposals</span>
        </button>

        {/* Default Pipeline Dropdown */}
        <select className="border border-gray-300 rounded-lg px-4 py-2  cursor-pointer">
          <option>Default Pipeline</option>
        </select>

        {/* Assigned to Me Checkbox */}
        <label className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2  cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Assigned to Me</span>
        </label>

        {/* Copy Icon */}
        <button className="p-2 border rounded-lg bg-white hover:bg-gray-100  cursor-pointer">
          <FaRegFileAlt />
        </button>
      </div>
    </div>
  );
};

export default Header;
