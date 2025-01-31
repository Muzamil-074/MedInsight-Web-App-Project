import React from 'react';
import Header from '../_components/Header';

function AboutUsPage() {
  return (
    <div>
      <Header/>
      <div className="bg-gradient-to-b from-[#020a10] via-[#024e7c] to-[#02c7e2] text-white min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-300 text-lg">
              At Medicine Insights, we aim to make healthcare information accessible, reliable, and actionable for everyone.
            </p>
          </header>

          {/* Our Mission */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to empower individuals with accurate and detailed information about medicines and symptoms. 
              We strive to bridge the gap between complex medical information and everyday users by making it accessible and easy to understand.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-400">
              We envision a world where everyone has the tools and resources to make informed healthcare decisions. Medicine Insights aspires to become the most trusted platform for personalized healthcare insights.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>A comprehensive database of medicines, including detailed information.</li>
              <li>An AI-powered symptoms checker to guide users towards potential treatments.</li>
              <li>A secure and personalized experience with user authentication and history tracking.</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300">For any inquiries, feel free to reach out to us at:</p>
            <p className="text-lg font-medium text-gray-100 mt-2">Medinsight25@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
