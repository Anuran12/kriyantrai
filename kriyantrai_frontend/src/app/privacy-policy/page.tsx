"use client";

import React from "react";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-4">🔐 PRIVACY POLICY</h1>
        <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="mb-2"><strong>Effective Date:</strong> [Add Date]</p>
            <p className="mb-0"><strong>Company Name:</strong> Kriyantrai</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Introduction</h2>
          <p>Kriyantrai (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://kriyantrai.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">https://kriyantrai.com/</a> and use our services.</p>
          <p>By using our website, you consent to the practices described in this policy.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 pt-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company/Organization Name</li>
            <li>Any information submitted via forms or contact requests</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">2.2 Technical Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Time zone setting</li>
            <li>Pages visited and interaction data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">2.3 Usage Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>How you use our website</li>
            <li>Services viewed or requested</li>
            <li>Interaction patterns</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">2.4 Cookies & Tracking Technologies</h3>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improve user experience</li>
            <li>Analyze traffic</li>
            <li>Understand user behavior</li>
          </ul>
          <p className="text-sm text-gray-500">(See Section 10 for more details)</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">3. How We Use Your Information</h2>
          <p>We use collected data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and manage our services</li>
            <li>Respond to inquiries and client requests</li>
            <li>Improve website performance and user experience</li>
            <li>Send updates, proposals, or service-related communications</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Legal Basis for Processing (GDPR Compliance)</h2>
          <p>If you are located in the European Economic Area (EEA), we process your data based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent</strong> – when you submit forms or accept cookies</li>
            <li><strong>Contractual Necessity</strong> – to provide requested services</li>
            <li><strong>Legitimate Interest</strong> – improving services and communication</li>
            <li><strong>Legal Obligations</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Sharing of Information</h2>
          <p>We do not sell your personal data.</p>
          <p>We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trusted service providers (hosting, analytics, CRM tools)</li>
            <li>Legal authorities (if required by law)</li>
            <li>Business partners (only when necessary for project delivery)</li>
          </ul>
          <p>All third parties are required to maintain confidentiality and data protection.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">6. International Data Transfers</h2>
          <p>Your data may be processed outside your country, including in India or other jurisdictions.</p>
          <p>We ensure appropriate safeguards such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard contractual clauses</li>
            <li>Secure data handling practices</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Data Retention</h2>
          <p>We retain personal data only as long as necessary:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For service delivery</li>
            <li>For legal, accounting, or reporting requirements</li>
          </ul>
          <p>After that, data is securely deleted or anonymized.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">8. Your Rights (GDPR & CCPA)</h2>
          <p>Depending on your location, you have the right to:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 pt-2">For EU Users (GDPR Rights)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion (“Right to be Forgotten”)</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">For US Users (CCPA-style Rights)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Know what data we collect</li>
            <li>Request deletion of personal data</li>
            <li>Opt-out of data sharing (we do not sell data)</li>
          </ul>
          <p>To exercise your rights, contact us at: <a href="mailto:info@kriyantrai.com" className="text-blue-600 hover:text-blue-800">info@kriyantrai.com</a></p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">9. Data Security</h2>
          <p>We implement industry-standard security measures including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure servers and encryption</li>
            <li>Access control and authentication</li>
            <li>Regular monitoring</li>
          </ul>
          <p>However, no system is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">10. Cookies Policy</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enhance website functionality</li>
            <li>Analyze traffic (e.g., Google Analytics)</li>
            <li>Remember user preferences</li>
          </ul>
          <p>You can:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Disable cookies via browser settings</li>
            <li>Accept or reject cookie banners (if implemented)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">11. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites.</p>
          <p>We are not responsible for their privacy practices.<br />We recommend reviewing their policies before providing any data.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">12. Children’s Privacy</h2>
          <p>Our services are not intended for individuals under 18 years of age.</p>
          <p>We do not knowingly collect data from children.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">13. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically.</p>
          <p>Changes will be posted on this page with an updated “Effective Date”.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">14. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy or your data:</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-2">
            <p className="font-bold text-gray-900 m-0">Kriyantrai</p>
            <p className="flex items-center gap-2 m-0">📧 <a href="mailto:info@kriyantrai.com" className="text-blue-600 hover:text-blue-800">info@kriyantrai.com</a></p>
            <p className="flex items-center gap-2 m-0">📍 Kolkata, West Bengal, India</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
