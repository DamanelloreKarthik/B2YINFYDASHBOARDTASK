import React, { useState } from "react";
import {
  FaBell,
  FaHome,
  FaTasks,
  FaStar,
  FaFileAlt,
  FaPen,
  FaMoneyCheckAlt,
  FaFolderOpen,
  FaUser,
  FaUsers,
  FaIdCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = () => {
  // State to manage visibility of sections
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(true);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(true);
  const [isContactsOpen, setIsContactsOpen] = useState(true);

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-300 flex flex-col">
      {/* Top Section */}

      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>

          <div className="flex items-center justify-between gap-2">
            {/* Text Section */}
            <div className="flex flex-col whitespace-nowrap">
              <h1 className="font-semibold text-lg">Temelio Foundation</h1>
              <p className="text-sm text-gray-500">Foundation</p>
            </div>

            {/* Chevron Icons in a column on the right side */}
            <div className="flex flex-col items-center">
              <FaChevronUp className="text-gray-500" />
              <FaChevronDown className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg bg-white"
            placeholder="Search..."
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-2">
          <SidebarItem icon={<FaBell />} label="Notifications" />
          <SidebarItem icon={<FaHome />} label="Home" />
          <SidebarItem
            icon={<FaTasks />}
            label="Tasks"
            rightIcon={<FaStar className="text-gold-500" />}
          />
          <SidebarItem
            icon={<FaFileAlt />}
            label="Proposals"
            rightIcon={<FaStar className="text-gold-500" />}
          />

          {/* Workflow Section */}
          <SidebarSection
            title="Workflow"
            isOpen={isWorkflowOpen}
            toggle={() => setIsWorkflowOpen((prev) => !prev)}
          >
            <SidebarItem icon={<FaPen />} label="Form Builder" />
            <SidebarItem icon={<FaUser />} label="Reviewers" />
            <SidebarItem icon={<FaMoneyCheckAlt />} label="Payments" />
            <SidebarItem icon={<FaFolderOpen />} label="Grantee Reports" />
          </SidebarSection>

          {/* Documents Section */}
          <SidebarSection
            title="Documents"
            isOpen={isDocumentsOpen}
            toggle={() => setIsDocumentsOpen((prev) => !prev)}
          >
            <SidebarItem icon={<FaFileAlt />} label="Document Templates" />
            <SidebarItem icon={<FaFolderOpen />} label="Document Centre" />
          </SidebarSection>

          {/* Contacts Section */}
          <SidebarSection
            title="Contacts"
            isOpen={isContactsOpen}
            toggle={() => setIsContactsOpen((prev) => !prev)}
          >
            <SidebarItem icon={<FaUser />} label="Grantees" />
            <SidebarItem icon={<FaUsers />} label="Individuals" />
            <SidebarItem icon={<FaIdCard />} label="Constituents" />
          </SidebarSection>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, rightIcon }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div className="flex items-center space-x-3">
        <div>{icon}</div>
        <span className="font-medium">{label}</span>
      </div>
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};

const SidebarSection = ({ title, isOpen, toggle, children }) => {
  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
        onClick={toggle}
      >
        <span className="font-semibold text-gray-600 uppercase">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="flex flex-col space-y-2 pl-4">{children}</div>}
    </div>
  );
};

export default Sidebar;
