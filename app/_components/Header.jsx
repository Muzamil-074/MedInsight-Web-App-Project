"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// Correct import for the App Router

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();  // Initialize the useRouter hook from next/navigation

  const handleLoginClick = () => {
    router.push('/sign-in?redirect_url=https%3A%2F%2Fmed.muzamildars.xyz%2Fdashboard');  // Redirect to /dashboard when Login is clicked
  };

  const handleSignUpClick = () => {
    router.push('/sign-up?redirect_url=https%3A%2F%2Fmed.muzamildars.xyz%2Fdashboard');  // Redirect to /dashboard when Sign Up is clicked
  };
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#020a10] sticky top-0 z-50">
      <div className="flex items-center">
        {/* Logo Image */}
  <a href="/Home">
    <img 
      src="/logo6.png" 
      alt="Medicine Insight Logo" 
      className="w-30 h-12 mr-2 cursor-pointer" 
    />
  </a>


       
      </div>

      {/* Desktop Navigation */}

    <nav className="hidden md:flex space-x-20 text-lg">
      {/* Link to the Features page */}
      <Link href="/features" legacyBehavior>
        <a className="text-white hover:text-[#02c9e3] transition duration-300">Features</a>
      </Link>
      {/* Link to another page in landing_pages */}
      <Link href="/how_it_works" legacyBehavior>
        <a className="text-white hover:text-[#02c9e3] transition duration-300">How It Works</a>
      </Link>

      <Link href="/about_us" legacyBehavior>
        <a className="text-white hover:text-[#02c9e3] transition duration-300">About Us</a>
      </Link>
    </nav>
      {/* Buttons */}
      <div className="hidden md:flex">
        <button 
          className="px-4 py-2 text-md text-white border border-white rounded-md mr-4 hover:bg-white hover:text-[#020a10] transition duration-300" 
          onClick={handleLoginClick}  // Add onClick handler for Login button
        >
          Login
        </button>
        <button 
          className="px-4 py-2 text-md text-white bg-[#02c9e3] rounded-md hover:bg-white hover:text-[#02c9e3] transition duration-300"
          onClick={handleSignUpClick}  // Add onClick handler for Sign Up button
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none "
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#020a10] flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/features" className="text-white hover:text-[#02c9e3] transition duration-300">Features</a>
          <a href="/how_it_works" className="text-white hover:text-[#02c9e3] transition duration-300">How It Works</a>
          <a href="/about_us" className="text-white hover:text-[#02c9e3] transition duration-300">About Us</a>
          <div className="flex flex-col space-y-4">
            <button 
              className="px-4 py-2 text-md text-white border border-white rounded-md hover:bg-white hover:text-[#020a10] transition duration-300"
              onClick={handleLoginClick}  // Add onClick handler for Login button in mobile menu
            >
              Login
            </button>
            <button 
              className="px-4 py-2 text-md text-white bg-[#02c9e3] rounded-md hover:bg-white hover:text-[#02c9e3] transition duration-300"
              onClick={handleSignUpClick}  // Add onClick handler for Sign Up button in mobile menu
            >
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
