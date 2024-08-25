import PublicLayout from '@/components/shared/PublicLayout';
import React from 'react';

export default function About() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are committed to providing the best services to our clients. Our team is dedicated to helping you achieve your goals with cutting-edge solutions.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to deliver innovative solutions that drive business success and create lasting value. We strive to empower our clients by providing the tools and support they need to thrive in a competitive market.
          </p>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/images/team-member-1.jpg"
                alt="Team Member 1"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO</p>
              <p className="mt-2 text-gray-500 text-sm">
                John leads the company with a focus on innovation and excellence.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/images/team-member-2.jpg"
                alt="Team Member 2"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="mt-2 text-gray-500 text-sm">
                Jane is responsible for overseeing our technology strategy and development.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/images/team-member-3.jpg"
                alt="Team Member 3"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">COO</p>
              <p className="mt-2 text-gray-500 text-sm">
                Alice ensures our operations run smoothly and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-16 bg-gray-100 py-12 rounded-lg shadow-inner">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest standards of honesty and ethical conduct in everything we do.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We foster a culture of creativity and continuous improvement to stay ahead of the curve.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We prioritize their needs and work tirelessly to exceed their expectations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
