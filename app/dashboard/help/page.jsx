"use client";
import React, { useState } from 'react';

function HowItWorksPage() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="bg-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center sm:text-5xl bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text">
              How Medicine Insights Works
            </h1>
            <p className=" text-gray-800 text-lg sm:text-xl">
              Learn how to use Medicine Insights to search for medicine information easily.
            </p>
          </header>

          {/* Search Feature */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-3xl bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text">Search Medicine</h2>
            <p className="text-gray-800 mb-4 text-center sm:text-lg">
              To fetch detailed information about any medicine, follow these steps:
            </p>
            <ul className="list-disc list-inside  text-gray-800 mt-2 space-y-2 sm:text-lg">
              <li>Enter the name of the medicine in the search bar.</li>
              <li>Get comprehensive details like side effects, uses, formulas, and more.</li>
            </ul>
          </section>

          {/* Additional Note */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-3xl bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text">Note</h2>
            <p className="text-gray-800 text-center sm:text-lg">
              Medicine Insights helps provide information, but it is not a substitute for professional medical advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
