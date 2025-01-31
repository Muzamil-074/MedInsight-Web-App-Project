'use client';
import React from 'react';
import { IoHome } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlinePersonSearch, MdOutlineHistory, MdOutlineHelpOutline } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function SideBar({ isOpen, onClose }) {
  const Menu = [
    { id: '1', name: 'Home', icon: <IoHome />, path: '/dashboard' },
    { id: '2', name: 'Support/Help', icon: <MdOutlineHelpOutline />, path: '/dashboard/help' },
    { id: '3', name: 'About Us', icon: <IoIosPeople />, path: '/dashboard/about_us' },
    { id: '4', name: 'Logout', icon: <CiLogout />, path: '/' },
  ];

  const path = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-[#2179d1] via-[#042f59] to-[#011121] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 md:translate-x-0 md:w-64`}
      >
        {/* Close Button (Mobile only) */}
        <button
          onClick={onClose}
          className="text-white text-2xl absolute top-4 right-4 md:hidden"
        >
          ✖
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center p-4">
          <Image src="/logo6.png" width={80} height={80} alt="Logo" />
        </div>

        <hr className="my-6 border-t-4 border-[#02c9e3]" />

        {/* Menu Items */}
        <ul className="px-4">
          {Menu.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                if (item.name === 'Logout') {
                  // Clerk logout logic
                 router.push(item.path)
                } else {
                  router.push(item.path);
                  onClose(); // Close sidebar on navigation (Mobile)
                }
                
              }}
              className={`flex items-center gap-4 p-3 mb-2 text-white/90 rounded-full font-medium cursor-pointer hover:bg-white/90 hover:text-[#02c9e3] ${
                item.path === path
                  ? 'bg-[#02c9e3] text-white shadow-[0_0_3px_3px_rgba(2,201,227,0.5)]'
                  : ''
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-lg">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* User Button at the Bottom for Mobile */}
        <div className="flex items-center space-x-4 px-8 md:hidden">
  <span className="text-white text-xl mr-5">Your Account</span>
  <UserButton className="mr-5" />
</div>

      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}

export default SideBar;
