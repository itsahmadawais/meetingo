import PublicLayout from '@/components/shared/PublicLayout';
import React from 'react';

export default function TermsConditions() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-700 mb-6">Terms and Conditions</h2>

        <p className="mb-4">
          <strong>Effective Date:</strong> 25 August, 2024
        </p>

        <p className="mb-4">
          Welcome to Meetingo! By accessing or using our services, you agree to be bound by the following terms and conditions. Please read these terms carefully before using our platform.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">1. Acceptance of Terms</h3>
        <p className="mb-4">
          By accessing Meetingo, you accept and agree to these Terms and Conditions, which govern your use of our website and services. If you do not agree with any part of these terms, you must not use our platform.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">2. Use of the Service</h3>
        <ul className="list-disc list-inside mb-4">
          <li>You must be at least 18 years old to use Meetingo services.</li>
          <li>You agree to use our platform only for lawful purposes and in a manner that does not infringe on the rights of others.</li>
          <li>Meetingo reserves the right to suspend or terminate your account if you violate these terms or engage in any harmful activity.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">3. Account Registration</h3>
        <p className="mb-4">
          To access certain features of Meetingo, you may be required to register an account. You agree to provide accurate and complete information during registration and to keep your account information up to date.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">4. Privacy</h3>
        <p className="mb-4">
          Your use of Meetingo is also governed by our Privacy Policy. By using our platform, you consent to the collection and use of your information as outlined in the Privacy Policy.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">5. Intellectual Property</h3>
        <ul className="list-disc list-inside mb-4">
          <li>All content on Meetingo, including text, graphics, logos, and software, is the property of Meetingo or its licensors and is protected by intellectual property laws.</li>
          <li>You may not reproduce, distribute, or create derivative works from any content on Meetingo without our prior written consent.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">6. Limitation of Liability</h3>
        <p className="mb-4">
          Meetingo is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that our services will be error-free or uninterrupted. To the fullest extent permitted by law, Meetingo shall not be liable for any damages arising from your use of our platform.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">7. Changes to These Terms</h3>
        <p className="mb-4">
          Meetingo reserves the right to update or modify these Terms and Conditions at any time. We will notify you of any changes by updating the &quot;Effective Date&quot; at the top of these terms. Your continued use of our platform after such changes constitutes your acceptance of the new terms.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">8. Governing Law</h3>
        <p className="mb-4">
          These Terms and Conditions are governed by and construed in accordance with European Union laws. Any disputes arising from these terms will be resolved in the courts of the European Union.
        </p>

        <h3 className="text-2xl font-semibold text-slate-700 mb-4">9. Contact Us</h3>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@meetingo.io" className="text-primary underline">support@meetingo.io</a>.
        </p>
      </div>
    </PublicLayout>
  );
}
