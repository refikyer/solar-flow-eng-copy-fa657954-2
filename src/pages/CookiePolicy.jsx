import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Home')} className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how SolarFlow ("we," "our," or "us") uses cookies and similar technologies 
                on our website in accordance with Swiss data protection law and the EU General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit 
                a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Strictly Necessary Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are essential for the operation of our website. They enable core functionality such as security, 
                network management, and accessibility. You cannot opt-out of these cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Session management cookies</li>
                <li>Security cookies</li>
                <li>Load balancing cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies allow us to remember choices you make and provide enhanced, more personalized features.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Language preferences</li>
                <li>Form data storage</li>
                <li>User interface customization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics (anonymized IP)</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.4 Marketing Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Advertisement targeting cookies</li>
                <li>Social media integration cookies</li>
                <li>Conversion tracking cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Google Analytics:</strong> For website traffic analysis (with IP anonymization enabled)</li>
                <li><strong>Google Maps:</strong> For location-based services</li>
                <li><strong>Social Media Platforms:</strong> For social sharing features (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Cookies can be session-based or persistent:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Most of our cookies are session cookies. Persistent cookies typically expire within 1-2 years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Legal Basis for Cookie Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under Swiss and EU law, we process cookies based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Consent:</strong> For non-essential cookies, we obtain your explicit consent before placing them on your device</li>
                <li><strong>Legitimate Interest:</strong> For essential cookies necessary for website functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Cookie Consent Banner</h3>
              <p className="text-gray-700 leading-relaxed">
                When you first visit our website, you will see a cookie consent banner where you can accept or reject 
                non-essential cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can typically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific sites</li>
                <li>Block all cookies from all sites</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that blocking or deleting cookies may impact your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Browser-Specific Cookie Management</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For instructions on managing cookies in specific browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under Swiss and EU data protection law, you have the following rights regarding cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to withdraw consent at any time</li>
                <li>The right to access information about cookies we use</li>
                <li>The right to object to processing based on legitimate interests</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Do Not Track Signals</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website currently does not respond to "Do Not Track" (DNT) browser signals. However, you can use 
                browser settings to manage cookies as described above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our 
                operations, or other reasons. We will post the updated policy on this page with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:<br />
                Email: privacy@solarflow.com<br />
                Address: Sentier de sales 9, Genève 1205, Switzerland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Swiss Data Protection Authority</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have concerns about our cookie practices, you may contact the Swiss Federal Data Protection 
                and Information Commissioner (FDPIC):<br />
                Website: www.edoeb.admin.ch<br />
                Address: Feldeggweg 1, 3003 Bern, Switzerland
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}