import React from 'react';

function AboutUsPage() {
  return (
    <div className="bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Page Title */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#02c9e3] to-[#0a86d1] text-transparent bg-clip-text">About Us</h1>
          <p className="text-gray-600 text-lg mt-2">
            At <span className="font-semibold">Medicine Insights</span>, we aim to make healthcare information accessible, reliable, and actionable for everyone.
          </p>
        </header>

        {/* Our Mission */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to empower individuals with accurate and detailed information about medicines and symptoms. 
            We strive to bridge the gap between complex medical knowledge and everyday users by making it accessible and easy to understand.
          </p>
        </section>

        {/* Our Vision */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            We envision a world where everyone has the tools and resources to make informed healthcare decisions. 
            <span className="font-semibold">Medicine Insights</span> aspires to become the most trusted platform for personalized healthcare insights.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li><span className="font-semibold">Comprehensive Medicine Database:</span> Access detailed information on medicines, including usage, side effects, and interactions.</li>
            <li><span className="font-semibold">AI-Powered Symptom Checker:</span> Get guidance on potential conditions and treatments based on your symptoms.</li>
            <li><span className="font-semibold">Personalized Experience:</span> Secure authentication, history tracking, and user-specific insights.</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">For any inquiries, feel free to reach out to us at:</p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            <a href="mailto:Medinsight25@gmail.com" className="text-[#02c9e3] hover:underline">Medinsight25@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUsPage;
