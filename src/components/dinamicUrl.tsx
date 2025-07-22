// DynamicURLInputs.tsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai/index";
import { formAtom } from "@/state";

export function DynamicURLInputs() {
  const [form, setForm] = useAtom(formAtom);
  const handleChange = (index: number, value: string) => {
    const updatedUrls = [...form.urls];
    updatedUrls[index] = value;
    setForm(prev => ({
      ...prev,
      urls: updatedUrls,
    }));
  };
  const addField = () => {
    setForm(prev => ({
      ...prev,
      urls: [...prev.urls, ""],
    }));
  };

  const removeField = (index: number) => {
    const updatedUrls = [...form.urls];
    updatedUrls.splice(index, 1);
    setForm(prev => ({
      ...prev,
      urls: updatedUrls,
    }));
  };

  return (
    <div className="grid gap-4">
      <Label className="text-base">URLs</Label>

      {form.urls.map((url, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={e => handleChange(idx, e.target.value)}
          />
          {form.urls.length > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeField(idx)}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          )}
        </div>
      ))}

      <Button
        type="button"
        onClick={addField}
        variant="outline"
        size="sm"
        className="w-fit"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add URL
      </Button>
    </div>
  );
}
