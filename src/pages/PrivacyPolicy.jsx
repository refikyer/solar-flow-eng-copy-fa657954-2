import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Home')} className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                SolarFlow ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Swiss Federal 
                Act on Data Protection (FADP) and the EU General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Controller</h2>
              <p className="text-gray-700 leading-relaxed">
                SolarFlow<br />
                Sentier de sales 9<br />
                Genève 1205<br />
                Switzerland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and property address</li>
                <li><strong>Property Information:</strong> Property type, roof condition, and average monthly electric bill</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data</li>
                <li><strong>Communication Data:</strong> Records of your communications with us and our partner companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We process your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide you with solar installation quotes and consultations</li>
                <li>To share your information with up to 4 vetted solar installation companies who will contact you</li>
                <li>To improve our services and user experience</li>
                <li>To send you relevant information about solar energy solutions</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Consent:</strong> You have given explicit consent for us to share your information with solar companies</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
                <li><strong>Contractual Necessity:</strong> Processing is necessary to provide the services you requested</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a quote request, we share your personal information with up to 4 carefully selected solar installation 
                companies in your area. These companies are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Independently operated businesses</li>
                <li>Required to comply with applicable data protection laws</li>
                <li>Authorized to contact you regarding solar installation services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Under GDPR and Swiss data protection law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Object:</strong> Object to processing of your personal data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                typically for 3 years after your last interaction with us, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
                access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is primarily stored in Switzerland. If we transfer data outside Switzerland or the EEA, we ensure 
                appropriate safeguards are in place in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting 
                the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:<br />
                Email: privacy@solarflow.com<br />
                Address: Sentier de sales 9, Genève 1205, Switzerland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Supervisory Authority</h2>
              <p className="text-gray-700 leading-relaxed">
                If you believe we have not handled your personal data properly, you have the right to lodge a complaint with 
                the Swiss Federal Data Protection and Information Commissioner (FDPIC) or your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}