import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

async function getCampaigns() {
  // MOCK DATA
  return [
    {
      id: 1,
      title: "Help Us Launch Our Music Festival Dream!",
      description: "Campaign started 10 days ago",
      image: "/festival.jpg",
    },
    {
      id: 2,
      title: "Help Us Launch Our Dream!",
      description: "Campaign started 1 year ago",
      image: "/constrution.jpg",
    },
  ];
}

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">
          Your <span className="text-black">Campaigns</span>
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">
            Published
          </h2>

          <div className="grid gap-6">
            {campaigns.map(c => (
              <div
                key={c.id}
                className="flex items-start gap-4 bg-white shadow-md p-4 rounded"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-40 h-28 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm text-gray-500">{c.description}</p>
                  <div className="mt-2 flex gap-2">
                    <button className="bg-orange-500 text-white px-3 py-1 rounded">
                      Manage campaign
                    </button>
                    <button className="bg-orange-500 text-white px-3 py-1 rounded">
                      View campaign
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6">
          <Link href="/createCampaign">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow">
              Start a Campaign
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
