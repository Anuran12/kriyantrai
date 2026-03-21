"use client";

import React from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function SLAPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <div className="mb-2">
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back
          </button>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-4">📜 SERVICE LEVEL AGREEMENT (SLA)</h1>
        <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Overview</h2>
          <p>This Service Level Agreement (SLA) defines the level of service provided by Kriyantrai for its software, AI solutions, and development services.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Scope of Services</h2>
          <p>This SLA applies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Web and mobile applications</li>
            <li>AI/ML solutions</li>
            <li>Automation systems</li>
            <li>APIs and backend services</li>
            <li>Hosting and maintenance (if included in contract)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Service Availability</h2>
          <p>We aim to provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>99% uptime for deployed applications (if hosting is managed by us)</li>
          </ul>
          <p>However, uptime excludes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduled maintenance</li>
            <li>Force majeure events</li>
            <li>Third-party service outages</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Support & Response Time</h2>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Issue Severity</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Description</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-3 font-semibold text-red-600">Critical</td>
                  <td className="px-6 py-3">System down / major failure</td>
                  <td className="px-6 py-3">Within 4–8 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-semibold text-orange-500">High</td>
                  <td className="px-6 py-3">Major feature not working</td>
                  <td className="px-6 py-3">Within 24 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-semibold text-yellow-600">Medium</td>
                  <td className="px-6 py-3">Partial issue</td>
                  <td className="px-6 py-3">1–2 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-semibold text-blue-600">Low</td>
                  <td className="px-6 py-3">Minor bug / improvement</td>
                  <td className="px-6 py-3">3–5 business days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Maintenance</h2>
          <p>We may perform:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduled maintenance (with prior notice)</li>
            <li>Emergency maintenance (if required for security or stability)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Client Responsibilities</h2>
          <p>Clients must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate requirements</li>
            <li>Ensure timely communication</li>
            <li>Make payments as agreed</li>
            <li>Not misuse or overload systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Exclusions</h2>
          <p>The SLA does not cover:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Issues caused by third-party services</li>
            <li>Client-side errors or misuse</li>
            <li>Unauthorized modifications</li>
            <li>External cyber attacks beyond reasonable control</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">8. Data Backup & Recovery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Backups are provided only if explicitly included in the contract</li>
            <li>Clients are encouraged to maintain independent backups</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">9. Service Credits</h2>
          <p>If uptime commitments are not met, service credits may be provided at our discretion as per contract terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">10. Termination</h2>
          <p>This SLA remains valid until:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service termination</li>
            <li>Contract completion</li>
            <li>Mutual agreement</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">11. Changes to SLA</h2>
          <p>We reserve the right to modify this SLA at any time. Updates will be posted on this page.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">12. Contact</h2>
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
