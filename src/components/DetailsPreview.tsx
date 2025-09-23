import React from "react";
import { generateEditablePDF } from "@/utils/pdf-generator";

import { useRouter } from "next/navigation";

function DetailsPreview({ data, onEdit }: { data: any, onEdit: () => void }) {
  const handleCreateCampaign = async () => {
    // Se não tiver userId, atribui um temporário
    const payload = {
      ...data,
      name: data.name || data.title || "Untitled Campaign", // usa título como nome
      category_id: data.category_id || "dummy-category-123", // preenche fake para test
      userId: data.userId || "dummy-user-123",
    };

    try {
      const res = await fetch("/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error creating campaign");

      const result = await res.json();
      alert("Campaign created successfully!");
      console.log(result.campaign);


    } catch (err) {
      console.error("Erro ao criar campanha:", err);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Preview</h2>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Description:</strong> {data.description}</p>
      {data.picture && (
        <img
          src={URL.createObjectURL(data.picture)}
          alt="Preview"
          className="w-120 h-auto"
        />
      )}
      {data.video && (
        <video
          src={URL.createObjectURL(data.video)}
          controls
          className="w-100 h-auto"
        />
      )}
      {data.urls?.map((url: string, index: number) => (
        <div key={index} className="flex flex-col space-y-1">
          <a href={url} target="_blank"><strong>URL {index + 1}:</strong> {url}</a>
        </div>
      ))}
      <button
        onClick={onEdit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Edit
      </button>
      <button
        onClick={handleCreateCampaign}
        className="rounded bg-orange-500 text-white px-4 py-2"
      >
        Create Campaign
      </button>
      <button
        onClick={() => generateEditablePDF(data)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        📄 Gerar PDF Contrato
      </button>

    </div>
  );
}

export default DetailsPreview;