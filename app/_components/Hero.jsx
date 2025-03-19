"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
function Hero() {

  const router = useRouter();  // Initialize the useRouter hook from next/navigation

  const handleLoginClick = () => {
    router.push('/sign-in?redirect_url=https%3A%2F%2Fmed.muzamildars.xyz%2Fdashboard');  // Redirect to /dashboard when Login is clicked
  };
  const handleLearnMore =()=>{
    router.push('/features')
  }
  return (
    <section
      className="hero py-20 px-10"
      style={{
        backgroundImage: 'url("/background.jpg")', // Image located in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure it covers the full viewport
        margin: 0, // Remove default margin
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Text Content */}
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1
            className=" lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#02c9e3] to-[#06f76b] mb-6"
          >
            Discover Medicines with Ease
          </h1>
          <p
            className="mt-4 text-md text-transparent bg-clip-text bg-gradient-to-r from-[#12f9ff] to-[#06f76b] mb-6"
          >
            Search by name or image to get comprehensive, AI-powered insights about
            medicines.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start">
            <button className="text-white text-lg bg-[#02c9e3] px-6 py-3 rounded-md hover:bg-white hover:text-[#02c9e3] mr-0 sm:mr-4 mb-4 sm:mb-0"
             onClick={handleLoginClick}
            >
              Get Started
             
            </button>
            <button className="text-white text-lg border border-white rounded-md px-6 py-3 hover:bg-white hover:text-[#020a10]"
              onClick={handleLearnMore}
            >
              Learn More
            
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
