import React from "react";

const stats = [
  { icon: "✏️", label: "Drafts", count: 7 },
  { icon: "📤", label: "Submitted", count: 13 },
  { icon: "🔍", label: "In Review", count: 8 },
  { icon: "⏳", label: "Pending", count: 1 },
  { icon: "✅", label: "Approved", count: 0 },
  { icon: "❌", label: "Rejected", count: 1 },
  { icon: "📃", label: "Agreement", count: 4 },
  { icon: "💰", label: "Payment", count: 0 },
  { icon: "📊", label: "Reporting", count: 1 },
  { icon: "🏆", label: "Awarded", count: 31 },
];

const Statistics = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <ul className="divide-y divide-gray-200">
        {stats.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-700">{item.label}</span>
            </div>
            <span className="text-gray-500">{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
