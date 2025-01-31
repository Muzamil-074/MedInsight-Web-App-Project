import React from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';

function Dashboardlayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header />
          <hr className="border-b-4 border-[#02c9e3]" />
        </div>

        {/* Page Content */}
        <div className="p-5 mt-5">{children}</div>
      </div>
    </div>
  );
}

export default Dashboardlayout;
