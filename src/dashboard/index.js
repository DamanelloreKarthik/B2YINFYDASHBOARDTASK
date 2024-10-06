import React from "react";
import SideBarMenu from "./sidebarmenu";
import Header from "./header";
import Statistics from "./statistics";
import NextStageTable from "./next-stage-table";
import DraftTable from "./draft-table";

const Dashboard = () => {
  // Render the left sidebar section
  const renderLeftSideBarSection = () => {
    return (
      <div className="w-1/5 h-full bg-white shadow-lg">
        <SideBarMenu />
      </div>
    );
  };

  const renderRightDashboardSection = () => {
    return (
      <div className="flex flex-col h-full w-full">
        <Header />
        <div className="flex flex-row h-full p-4 space-x-4 overflow-y-auto">
          {/* Statistics on the left side */}
          <div className="w-[25%]">
            <Statistics />
          </div>

          {/* Tables in a column on the right side */}
          <div className="flex flex-col flex-grow space-y-4">
            <div className="bg-white rounded-lg shadow-md w-full">
              <NextStageTable />
            </div>
            <div className="bg-white rounded-lg shadow-md w-full">
              <DraftTable />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main layout
  return (
    <div className="flex flex-row h-screen bg-gray-50 border border-gray-300 bg-gray-50 rounded-lg h-full flex">
      {renderLeftSideBarSection()}
      {renderRightDashboardSection()}
    </div>
  );
};

export default Dashboard;
