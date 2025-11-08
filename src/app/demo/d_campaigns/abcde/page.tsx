import UpdateCampaignForm from "../../_components/d_campaign-update";
import Navbar from "../../_components/d_navbar";
import Footer from "../../_components/d_footer";

export default function EditCampaignPage() {

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <UpdateCampaignForm />
      <Footer />
    </div>
  );
}