import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <>
        <Navbar/>
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-orange-500 mb-8">Privacy Policy</h1>
            <p className="mb-4 text-sm text-gray-600">Last updated: 13/07/2025</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">1. Who We Are</h2>
                <p>
                    3F — Family, Friends & Fools — is a platform that empowers early-stage entrepreneurs to create campaigns and raise funding from family and friends, using a simple, transparent and fast process.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">2. Data We Collect</h2>
                <ul className="list-disc ml-6">
                    <li>Identification data: name, email, phone number</li>
                    <li>Campaign data: title, description, category, goal amount, payback timeline</li>
                    <li>Technical data: IP address, browser type, device info, approximate location</li>
                    <li>Multimedia: uploaded images, videos, or documents</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">3. How We Use Your Data</h2>
                <ul className="list-disc ml-6">
                    <li>To create and manage your campaigns</li>
                    <li>To send important notifications or updates</li>
                    <li>To improve our platform and user experience</li>
                    <li>To comply with legal or contractual obligations</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">4. Data Sharing</h2>
                <p>
                    We do <strong>not sell</strong> your personal data. We only share it when:
                </p>
                <ul className="list-disc ml-6">
                    <li>It’s necessary to deliver our services</li>
                    <li>Required by law or court order</li>
                    <li>With your explicit consent</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">5. Data Retention</h2>
                <p>
                    We retain your data only as long as necessary for the purposes outlined or as required by law.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">6. Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to safeguard your data from unauthorized access, misuse, or loss.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">7. Your Rights</h2>
                <p>You may request, at any time, to:</p>
                <ul className="list-disc ml-6">
                    <li>Access your data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request data deletion (“right to be forgotten”)</li>
                    <li>Withdraw consent</li>
                    <li>Object to certain data uses</li>
                </ul>
                <p className="mt-2">
                    Contact us at: <a href="mailto: 3f.familyfriendsfools@gmail.com" className="text-blue-600">3F.com</a>
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">8. Cookies</h2>
                <p>
                    We use cookies to enhance navigation, personalize content and analyze site traffic. You can configure your browser settings to disable cookies.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">9. Policy Changes</h2>
                <p>
                    We reserve the right to update this policy. Changes will be communicated on the platform and, where appropriate, require renewed consent.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">10. Contact</h2>
                <p>
                    For any questions or complaints regarding this policy, contact us at:
                    <br/>
                    📧 <a href="mailto: 3f.familyfriendsfools@gmail.com" className="text-blue-600">3F.com</a>
                </p>
            </section>
        </div>
        <Footer/>
        </>
    );
}
