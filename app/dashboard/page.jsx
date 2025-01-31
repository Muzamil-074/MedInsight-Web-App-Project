'use client';

import { useState } from 'react';

export default function MedicineSearch() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResponse('Please enter a valid query.');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/medicine_search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.data);
      } else {
        setResponse(data.error || 'An unknown error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger search on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] bg-clip-text text-transparent mb-6 md:mb-8">
        Medicine AI Search
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mb-8 md:mb-12">
        Ask about any medicine: formula, side effects, dosage, etc.
      </p>

      {/* Input and Button Container */}
      <div className="w-full max-w-xl relative flex items-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search here..."
          className="w-full p-4 pr-12 text-lg sm:text-xl bg-black text-white placeholder-gray-500 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-lg transition-all ease-in-out duration-300"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 text-[#02c9e3] hover:text-white transition duration-300"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-6 w-6 text-[#02c9e3]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Response Section */}
      <div className="w-full max-w-screen-md mx-auto md:hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center mb-6">
          Response:
        </h2>

        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
          {loading ? (
            <p className="animate-pulse text-center text-[#0a86d1] text-lg sm:text-xl">
              Loading, please wait...
            </p>
          ) : response ? (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-lg shadow-md space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text mb-4 text-center">
                Medicine Information
              </h3>
              <p className="text-sm text-gray-800">{response}</p>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg sm:text-xl">
              No response yet. Please enter a query to get started.
            </p>
          )}
        </div>
      </div>

      {/* Desktop Response Section */}
      <div className="w-full max-w-screen-md mx-auto hidden md:block">
        <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center mb-6">
          Response:
        </h2>

        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
          {loading ? (
            <p className="animate-pulse text-center text-[#0a86d1] text-lg sm:text-xl">
              Loading, please wait...
            </p>
          ) : response ? (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-lg shadow-md space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text mb-4 text-center">
                Medicine Information
              </h3>
              <p className="text-2xl text-gray-800">{response}</p>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg sm:text-xl">
              No response yet. Please enter a query to get started.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
