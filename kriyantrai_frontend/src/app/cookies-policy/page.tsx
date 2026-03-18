"use client";

import React from "react";
import Footer from "@/components/Footer";

export default function CookiesPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-4">🍪 COOKIE POLICY</h1>
        <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="mb-2"><strong>Effective Date:</strong> [Add Date]</p>
            <p className="mb-2"><strong>Company Name:</strong> Kriyantrai</p>
            <p className="mb-0"><strong>Website:</strong> <a href="https://kriyantrai.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">https://kriyantrai.com/</a></p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Introduction</h2>
          <p>This Cookie Policy explains how Kriyantrai (“we”, “our”, “us”) uses cookies and similar technologies when you visit our website.</p>
          <p>By using our website, you consent to the use of cookies as described in this policy.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">2. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help improve functionality, performance, and user experience.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 pt-2">3.1 Essential Cookies</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Required for website functionality</li>
            <li>Enable navigation and security features</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">3.2 Performance & Analytics Cookies</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Track website usage and performance</li>
            <li>Help us improve services</li>
            <li>Example: Google Analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">3.3 Functional Cookies</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remember user preferences</li>
            <li>Improve personalized experience</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">3.4 Marketing Cookies (if applicable)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Used for advertising and retargeting</li>
            <li>May track browsing across websites</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">4. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure website functionality</li>
            <li>Analyze traffic and performance</li>
            <li>Improve user experience</li>
            <li>Enhance security</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Third-Party Cookies</h2>
          <p>We may use third-party services such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics tools</li>
            <li>Cloud hosting</li>
            <li>Embedded content</li>
          </ul>
          <p>These providers may place cookies on your device and have their own privacy policies.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Managing Cookies</h2>
          <p>You can control cookies through your browser settings:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Block cookies</li>
            <li>Delete stored cookies</li>
            <li>Disable tracking</li>
          </ul>
          <p className="text-sm text-gray-500">Note: Disabling cookies may affect website functionality.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Cookie Consent</h2>
          <p>Where required by law (e.g., GDPR), we display a cookie consent banner allowing users to accept or reject cookies.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">8. Updates to Cookie Policy</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
