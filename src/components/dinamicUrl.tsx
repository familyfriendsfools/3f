// DynamicURLInputs.tsx
import React, { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { useAtom } from "jotai/index";
import { formAtom } from "@/state";

export function DynamicURLInputs() {
  const [form, setForm] = useAtom(formAtom);
  /*   const handleChange = (index: number, value: string) => {
      const updatedUrls = [...form.urls] as string[];
  
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
    }; */

  /*   const removeField = (index: number) => {
      const updatedUrls = [...form.urls] as string[];
      updatedUrls.splice(index, 1);
      setForm(prev => ({
        ...prev,
        urls: updatedUrls,
      }));
    }; */

  return (
    <div className="grid gap-4">
      <label className="text-base">URLs</label>

      {form.urls.map((url, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
          //onChange={e => handleChange(idx, e.target.value)}
          />
          {form.urls.length > 1 && (
            <button
              type="button"
            //onClick={() => removeField(idx)}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        //onClick={addField}
        className="bg-orange-500 text-white px-3 py-1 rounded-md"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add URL
      </button>
    </div>
  );
}
