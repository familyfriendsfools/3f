import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DynamicURLInputs } from "@/components/dinamicUrl";
import { useAtom } from "jotai";
import { formAtom } from "@/state";
import { Textarea } from "@/components/ui/textarea";

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
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          value={form.title || ""}
          onChange={e => handleInputs("title", e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          className="resize-none h-24 w-100"
          value={form.description || ""}
          onChange={e => handleInputs("description", e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label htmlFor="picture">Picture</Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={e => handleInputs("picture", e.target.files[0])}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label htmlFor="video">Video</Label>
        <Input
          id="video"
          type="file"
          accept="video/*"
          onChange={e => handleInputs("video", e.target.files[0])}
        />
      </div>
      <DynamicURLInputs />
    </div>
  );
}

export default Details;
