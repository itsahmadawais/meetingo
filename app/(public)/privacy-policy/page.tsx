import PublicLayout from '@/components/shared/PublicLayout';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-700 mb-6">Privacy Policy</h2>
        <p className="mb-4">
          <strong>Effective Date:</strong> 25 August, 2024
        </p>
        <p className="mb-4">
          Welcome to Meetingo. We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">1. Information We Collect</h3>
        <p className="mb-4">
          When you use our services, we may collect the following types of information:
        </p>
        <h4 className="text-xl font-semibold text-slate-700 mb-2">1.1 Personal Information</h4>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Email Address:</strong> We collect your email address to create your account, communicate with you about our services, and send you important updates or promotional information.</li>
          <li><strong>Business Name:</strong> If you provide your business name, we use this information to personalize your experience and tailor our services to better meet your needs.</li>
          <li><strong>Other Details:</strong> We may collect additional information, such as your name, phone number, and job title, to improve our services and communication with you.</li>
        </ul>
        <h4 className="text-xl font-semibold text-slate-700 mb-2">1.2 Usage Data</h4>
        <p className="mb-4">
          <strong>Log Data:</strong> We automatically collect information about your interactions with our website, such as your IP address, browser type, and pages visited. This helps us understand how our users engage with Meetingo and allows us to improve our platform.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Account Management:</strong> To create and manage your account, authenticate your identity, and provide you with access to our services.</li>
          <li><strong>Communication:</strong> To send you important updates, newsletters, and promotional offers related to Meetingo.</li>
          <li><strong>Service Improvement:</strong> To analyze usage data and feedback to enhance our platform’s functionality and user experience.</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations, prevent fraud, and ensure the security of our platform.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">3. Data Sharing and Disclosure</h3>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These parties are required to protect your information and may only use it for the purposes we specify.</li>
        </ul>
      </div>
    </PublicLayout>
  );
}
