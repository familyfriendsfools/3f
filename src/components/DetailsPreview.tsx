import React from "react";

function DetailsPreview({ data, onEdit }) {
    console.log(data)
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Preview</h2>
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Description:</strong> {data.description}</p>
            {data.picture && <img src={URL.createObjectURL(data.picture)} alt="Preview" className="w-48 h-auto" />}
            {data.video && <video src={URL.createObjectURL(data.video)} controls className="w-48 h-auto" />}
            {data.urls && data.urls.map((url, index) => (
                <div key={index} className="flex flex-col space-y-1">
                    <a href={url}><strong>URL {index + 1}:</strong> {url}</a>
                </div>
            ))}
            <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
            <button onClick={() => alert("Campaign Created!")} className="bg-green-500 text-white px-4 py-2 rounded">Create Campaign</button>
        </div>
    );
}

export default DetailsPreview;
