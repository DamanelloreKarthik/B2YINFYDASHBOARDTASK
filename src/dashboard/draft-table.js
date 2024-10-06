import React from "react";
import { FaSort, FaCog, FaChartLine } from "react-icons/fa";

const proposals = [
  {
    title: "Trees of the Future - 2023",
    stage: "Submitted",
    entity: "Trees of the Future",
    funding: "$5000",
    tags: ["Climate", "Climate Justice"],
  },
  {
    title: "Art For All - 2024 - Temelio",
    stage: "Submitted",
    entity: "Art For All",
    funding: "$0",
    tags: ["Climate", "Arts"],
  },
  {
    title: "Save the Children - 2024",
    stage: "Submitted",
    entity: "Save the Children",
    funding: "$400,000",
    tags: ["Education"],
  },
  {
    title: "Art For All - 2024 - Temelio",
    stage: "Submitted",
    entity: "Art For All",
    funding: "$30,000",
    tags: ["Climate", "Arts", "Scholarship"],
  },
  {
    title: "Climate Words - 2024 - Ten",
    stage: "Submitted",
    entity: "Climate Words",
    funding: "$10,000",
    tags: ["Arts"],
  },
];

const DraftTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="p-4 flex justify-between items-center border-b bg-gray-50">
          <h2 className="text-lg font-semibold">
            <span className="mr-2">●</span> Draft (7)
          </h2>
          <div className="space-x-2 flex items-center">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700 flex items-center">
              <FaChartLine className="mr-2" />
              Analyze Draft
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700">
              <FaCog />
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700">
              <FaSort />
            </button>
          </div>
        </div>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-gray-600">Proposal Title</th>
              <th className="p-4 text-left text-gray-600">Stage</th>
              <th className="p-4 text-left text-gray-600">Entity</th>
              <th className="p-4 text-left text-gray-600">Funding Requested</th>
              <th className="p-4 text-left text-gray-600">Tags</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 text-blue-600 hover:underline">
                  {proposal.title}
                </td>
                <td className="p-4">{proposal.stage}</td>
                <td className="p-4">{proposal.entity}</td>
                <td className="p-4">{proposal.funding}</td>
                <td className="p-4 space-x-2">
                  {proposal.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`inline-block px-2 py-1 text-xs rounded-lg ${
                        tag === "Climate"
                          ? "bg-green-100 text-green-600"
                          : tag === "Climate Justice"
                          ? "bg-green-200 text-green-800"
                          : tag === "Education"
                          ? "bg-purple-100 text-purple-600"
                          : tag === "Scholarship"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DraftTable;
