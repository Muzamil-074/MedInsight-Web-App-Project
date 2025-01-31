'use client';
import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import SideBar from './SideBar'; // Ensure you have a `SideBar` component for this

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle the sidebar

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-7 bg-gradient-to-r from-[#011121] via-[#011121] to-[#2179d1]">
        {/* Menu Button for Mobile */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-white text-2xl p-2 rounded-full hover:bg-white/10"
        >
          <IoMenu />
        </button>

        {/* Medicine Insights Text */}
        <h1 className="text-2xl md:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#02c9e3] to-white text-center flex-grow">
          Medicine Insights
        </h1>

        {/* User Button and Account Info */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4 border border-white rounded-lg px-2 md:px-3 py-1">
          <span className="text-white text-sm md:text-lg">Your Account</span>
          <UserButton />
        </div>
      </div>

      {/* Sidebar for Desktop (Always Visible) */}
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Header;
