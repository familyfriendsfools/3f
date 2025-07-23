import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Terms and Conditions
        </h1>
        <p className="mb-4 text-sm text-gray-600">Last updated: 13/07/2025</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the 3F platform, you agree to be bound by
            these Terms and Conditions. If you do not agree, please do not use
            the platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            2. Platform Purpose
          </h2>
          <p>
            3F is a platform designed to help early-stage entrepreneurs raise
            funds from family, friends, and their community through peer-to-peer
            (P2P) campaigns.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc ml-6">
            <li>
              You must provide accurate and complete information when creating a
              campaign.
            </li>
            <li>
              You are responsible for managing your payback plan and obligations
              to supporters.
            </li>
            <li>You must comply with all applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            4. Prohibited Uses
          </h2>
          <p>You may not use 3F to:</p>
          <ul className="list-disc ml-6">
            <li>Engage in fraudulent or misleading campaigns</li>
            <li>Promote illegal activities</li>
            <li>Violate the rights of others</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            5. Platform Fees
          </h2>
          <p>
            Creating a campaign is free. A success fee (x%) and transaction fee
            (y€) apply only when funds are successfully raised. Full details are
            available on our{" "}
            <a href="/fees" className="text-blue-600 underline">
              Fees and Tariffs
            </a>{" "}
            page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            3F is not responsible for any losses, liabilities or disputes
            between campaign creators and supporters. We provide the platform
            “as-is.”
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            7. Intellectual Property
          </h2>
          <p>
            All content, branding and software of 3F are the property of the
            platform or its licensors and may not be copied or used without
            permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            8. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate any account that
            violates these Terms, or for any other reason, with or without
            notice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            9. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of Portugal. Any disputes shall
            be subject to the exclusive jurisdiction of the courts in Lisbon.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            10. Contact
          </h2>
          <p>
            For any questions about these Terms, contact us at:
            <br />
            📧{" "}
            <a
              href="mailto:3f.familyfriendsfools@gmail.com"
              className="text-blue-600"
            >
              3f.familyfriendsfools@gmail.com
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
