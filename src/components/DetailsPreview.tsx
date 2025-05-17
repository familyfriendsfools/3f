import React from "react";

function DetailsPreview({ data, onEdit }) {
    const handleCreateCampaign = async () => {
        if (!data.userId) {
            alert("Utilizador não autenticado.");
            return;
        }

        try {
            const res = await fetch("/api/campaigns", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Erro ao criar campanha");

            const result = await res.json();
            alert("Campanha criada com sucesso!");
            console.log(result.campaign);
        } catch (err) {
            console.error(err);
            alert("Erro ao criar campanha.");
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
            {data.urls?.map((url, index) => (
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
        </div>
    );
}

export default DetailsPreview;
