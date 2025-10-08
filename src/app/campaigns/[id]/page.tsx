import { notFound } from "next/navigation";
import UpdateCampaignForm from "@/components/campaign-update";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getCampaignAction } from "@/actions/campaigns";

export default async function EditCampaignPage({
  params,
}: {
  params: { id: string };
}) {
  const campaign = await getCampaignAction(params.id);
  if (!campaign) return notFound();

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <UpdateCampaignForm campaign={campaign} />
      <Footer />
    </div>
  );
}