import React from "react";
import Sidebar from "./sidebar";
import Banner from "./banner";
import ContinueWatching from "./sections";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Scrollable Sidebar */}
      <div className="h-screen w-64 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Right content with scroll */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-6">
          <Banner />
          <ContinueWatching />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
