'use client'

import PublicLayout from '@/components/shared/PublicLayout';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import { ChartSpline, Mails, SwatchBook } from 'lucide-react';
import React from 'react';

export default function About() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg px-4 md:px-0">
          <h1 className="text-2xl md:text-6xl font-extrabold mb-4">About Meetingo</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Say goodbye to scheduling chaos! At Meetingo, we turn your appointment hassles into high-fives with our magical scheduler. Because who said organizing your life couldn't be fun?
          </p>
        </section>

        {/* Why We Exist */}
        <section className="mt-10 md:mt-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why We Exist</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We&apos;ve all been there: endless back-and-forth emails, double bookings, and missed meetings. Meetingo was born out of the frustration that is “calendar chaos.” We&apos;re on a mission to bring simplicity, fun, and a sprinkle of magic to your scheduling needs. Because, let&apos;s face it, you have better things to do than chase after appointments.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-10 md:mt-24 text-center py-12 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-lg shadow-lg p-10 md: p-0">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6">Ready to Revolutionize Your Schedule?</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Join the Meetingo revolution and see for yourself how easy and fun scheduling can be. Your time is precious – we&apos;re here to help you make the most of it!
          </p>
          <RegisterLink className="inline-block bg-white text-green-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started Today
          </RegisterLink>
        </section>
      </div>
    </PublicLayout>
  );
}
