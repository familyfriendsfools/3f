// app/campaigns/page.tsx
import Link from 'next/link';

async function getCampaigns() {
    const res = await fetch('https://localhost:3000/campaigns', { cache: "no-store"});
    const data = await res.json();
    return data.campaigns;
}
export default async function CampaignsPage() {
    const campaigns = await getCampaigns();
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-orange-700 mb-6">Your <span className="text-black">Campaigns</span></h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-orange-600 mb-4">Published</h2>

                <div className="grid gap-6">
                    {/* Campanha 1 */}
                    <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded">
                        <img src="/festival.jpg" alt="Music Festival" className="w-40 h-28 object-cover rounded" />
                        <div>
                            <h3 className="text-lg font-bold">Help Us Launch Our Music Festival Dream!</h3>
                            <p className="text-sm text-gray-500">Campaign started 10 days ago</p>
                            <div className="mt-2 flex gap-2">
                                <button className="bg-orange-500 text-white px-3 py-1 rounded">Manage campaign</button>
                                <button className="bg-orange-500 text-white px-3 py-1 rounded">View campaign</button>
                            </div>
                        </div>
                    </div>

                    {/* Campanha 2 */}
                    <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded">
                        <img src="/constrution.jpg" alt="Construction" className="w-40 h-28 object-cover rounded" />
                        <div>
                            <h3 className="text-lg font-bold">Help Us Launch Our Dream!</h3>
                            <p className="text-sm text-gray-500">Campaign started 1 year ago</p>
                            <div className="mt-2 flex gap-2">
                                <button className="bg-orange-500 text-white px-3 py-1 rounded">Manage campaign</button>
                                <button className="bg-orange-500 text-white px-3 py-1 rounded">View campaign</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-6">
                <Link href="/createCampaign" className="text-blue-600 hover:underline">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow">
                    Start a Campaign
                </button>
                </Link>
            </div>
        </div>
    );
}
