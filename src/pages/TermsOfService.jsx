import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Home')} className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using SolarFlow's services, you agree to be bound by these Terms of Service and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                SolarFlow operates as a solar installation referral service. We connect homeowners and property owners with 
                qualified solar installation companies. We do not directly provide solar installation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important:</strong> By submitting a quote request through our platform, you explicitly consent to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your personal information (name, email, phone number, property address, and solar requirements) will be shared 
                with <strong>up to 4 vetted solar installation companies</strong></li>
                <li>These companies will contact you directly to provide quotes and consultations</li>
                <li>Each company operates independently and is responsible for their own services and interactions with you</li>
                <li>You may receive phone calls, emails, or other communications from these companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Obligations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">When using our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the accuracy of your information</li>
                <li>Not use the service for any unlawful purpose</li>
                <li>Not interfere with or disrupt the service</li>
                <li>Comply with all applicable local, national, and international laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Guarantee of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to connect you with reputable solar installation companies, we do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>That you will receive quotes from any specific number of companies</li>
                <li>The quality, pricing, or availability of services from referred companies</li>
                <li>That any installation will be completed or meet your expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Independent Contractors</h2>
              <p className="text-gray-700 leading-relaxed">
                Solar installation companies in our network are independent contractors. SolarFlow is not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The quality of work performed by installation companies</li>
                <li>Any damages, injuries, or losses resulting from their services</li>
                <li>Disputes between you and any installation company</li>
                <li>The accuracy of quotes or estimates provided by installation companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, SolarFlow shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied, 
                including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality on our platform, including but not limited to text, graphics, logos, 
                and software, are the exclusive property of SolarFlow and are protected by international copyright, trademark, 
                and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to our service immediately, without prior notice, 
                for any reason, including but not limited to breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Switzerland, 
                without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Geneva, Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms of Service at any time. Material changes will be 
                notified by posting the new terms on this page with an updated "Last Updated" date. Your continued use 
                of the service after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be 
                limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:<br />
                Email: legal@solarflow.com<br />
                Address: Sentier de sales 9, Genève 1205, Switzerland
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}