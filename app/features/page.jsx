import React from 'react';
import Header from '../_components/Header';

function FeaturesPage() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-[#020a10] via-[#024e7c] to-[#02c7e2] text-white min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Features of Medicine Insights</h1>
            <p className="text-gray-300 text-lg">
              Explore the advanced features of Medicine Insights designed to make healthcare information accessible and actionable.
            </p>
          </header>

          {/* Feature: Medicine Insights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Medicine Insights</h2>
            <p className="text-gray-100 text-base mb-4">
              Search and access detailed information about medicines, including:
            </p>
            <ul className="list-disc list-inside text-gray-100 text-base space-y-2">
              <li>Side Effects</li>
              <li>Uses</li>
              <li>Formulas</li>
              <li>Reactions</li>
              <li>Precautions and more</li>
            </ul>
          </section>

          {/* Feature: Symptoms Checker */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Symptoms Checker</h2>
            <p className="text-gray-100 text-base mb-4">
              Enter your symptoms to get recommendations for potential treatments and medications. <span className="text-yellow-300">(Work in progress)</span>
            </p>
          </section>

          {/* Feature: History */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p className="text-gray-100 text-base mb-4">
              Access and manage your personal history of searched medicines, symptoms, and recommended treatments. Your information is securely stored and easy to retrieve. <span className="text-yellow-300">(Work in progress)</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
