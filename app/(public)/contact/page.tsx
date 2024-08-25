import PublicLayout from '@/components/shared/PublicLayout'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Contact() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        {/* Page Description */}
        <p className="text-center text-lg text-gray-600 mb-12">
          We’d love to hear from you! Please fill out the form below, and we’ll get in touch with you shortly.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <Button type='submit'>
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> 123 Main St, Your City, Your Country
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div> */}
      </div>
    </PublicLayout>
  )
}
