import React from "react";
import { DynamicURLInputs } from "@/components/dinamicUrl";
import { useAtom } from "jotai";
import { formAtom } from "@/state";


function Details() {
  const [form, setForm] = useAtom(formAtom);
  const handleInputs = (key: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(" #", form.urls);
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={form.title || ""}
          onChange={e => handleInputs("title", e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="resize-none h-24 w-100"
          value={form.description || ""}
          onChange={e => handleInputs("description", e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="picture">Picture</label>
        <input
          id="picture"
          type="file"
          accept="image/*"
          onChange={e => handleInputs("picture", e.target?.files?.[0])}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="video">Video</label>
        <input
          id="video"
          type="file"
          accept="video/*"
          onChange={e => handleInputs("video", e.target?.files?.[0])}
        />
      </div>
      <DynamicURLInputs />
    </div>
  );
}

export default Details;
