"use client";

import React from "react";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-4">📄 TERMS & CONDITIONS</h1>
        <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="mb-2"><strong>Effective Date:</strong> [Add Date]</p>
            <p className="mb-0"><strong>Company Name:</strong> Kriyantrai</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Introduction</h2>
          <p>Welcome to Kriyantrai. These Terms & Conditions (“Terms”) govern your use of our website and services.</p>
          <p>By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
          <p>Kriyantrai provides technology solutions including Artificial Intelligence, Machine Learning, Automation, Data Analytics, and Application Development services.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Services Offered</h2>
          <p>Kriyantrai offers, but is not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI & Machine Learning Solutions</li>
            <li>Web, Mobile & Full-Stack Development</li>
            <li>Data Analytics & Dashboard Development</li>
            <li>Workflow Automation & Chatbots</li>
            <li>Custom Software Development</li>
          </ul>
          <p>All services are subject to project-specific agreements, proposals, or contracts.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Use of Website</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the website only for lawful purposes</li>
            <li>Not attempt unauthorized access to systems or data</li>
            <li>Not misuse, copy, or distribute proprietary content</li>
            <li>Not interfere with website performance or security</li>
          </ul>
          <p>We reserve the right to restrict access if misuse is detected.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Intellectual Property Rights</h2>
          <p>All content on this website, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Text, graphics, logos</li>
            <li>Code, designs, UI/UX</li>
            <li>AI models, frameworks, and solutions</li>
          </ul>
          <p>are the intellectual property of Kriyantrai unless otherwise stated.</p>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy, reproduce, or resell any content</li>
            <li>Use our branding without permission</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Client Engagement & Payments</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 pt-2">5.1 Project Agreements</h3>
          <p>All client projects are governed by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Signed agreements</li>
            <li>Proposals</li>
            <li>Scope of Work (SOW)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">5.2 Payments</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments must be made as per agreed milestones</li>
            <li>Delays in payment may result in project suspension</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">5.3 Revisions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Revisions are limited to agreed scope</li>
            <li>Additional changes may incur extra charges</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Confidentiality</h2>
          <p>Both parties agree to maintain confidentiality of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Business data</li>
            <li>Project details</li>
            <li>Technical implementations</li>
          </ul>
          <p>This obligation continues even after project completion.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Data & Security</h2>
          <p>We implement industry-standard security practices. However:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not guarantee absolute security</li>
            <li>Users are responsible for safeguarding their own data</li>
          </ul>
          <p>Kriyantrai is not liable for data loss due to third-party systems, hosting issues, or cyber incidents beyond reasonable control.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">8. Third-Party Tools & Integrations</h2>
          <p>Our solutions may include third-party tools (APIs, platforms, cloud services).</p>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Downtime or issues from third-party services</li>
            <li>Policy changes by external providers</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">9. Limitation of Liability</h2>
          <p>Kriyantrai shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indirect or consequential damages</li>
            <li>Loss of profits, revenue, or data</li>
            <li>Business interruption</li>
          </ul>
          <p>Our total liability is limited to the amount paid for the specific service.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">10. Service Availability</h2>
          <p>We aim for high availability, but:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Services may be temporarily unavailable due to maintenance</li>
            <li>No guarantee of uninterrupted access</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">11. Termination</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Terminate services for violation of terms</li>
            <li>Suspend access due to non-payment or misuse</li>
          </ul>
          <p>Clients may terminate services as per contract terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">12. Indemnification</h2>
          <p>You agree to indemnify and hold Kriyantrai harmless from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legal claims arising from misuse of services</li>
            <li>Violation of laws or third-party rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">13. Governing Law</h2>
          <p>These Terms shall be governed by the laws of India, with jurisdiction in Kolkata, West Bengal.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">14. Changes to Terms</h2>
          <p>We may update these Terms at any time. Updates will be posted on this page.</p>
          <p>Continued use of the website implies acceptance of revised Terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">15. Contact Information</h2>
          <p>For any questions or concerns:</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-2">
            <p className="font-bold text-gray-900 m-0">Kriyantrai</p>
            <p className="flex items-center gap-2 m-0">📧 <a href="mailto:info@kriyantrai.com" className="text-blue-600 hover:text-blue-800">info@kriyantrai.com</a></p>
            <p className="flex items-center gap-2 m-0">📍 Kolkata, India</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
