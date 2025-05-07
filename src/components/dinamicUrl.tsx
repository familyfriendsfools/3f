// DynamicURLInputs.tsx
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2, Plus } from "lucide-react"
import { Label } from "@/components/ui/label"

export function DynamicURLInputs(urlParams, onChange) {
    const [urls, setUrls] = useState<string[]>(urlParams.urls || [""])
    console.log("?",urlParams)

    const handleChange = (index: number, value: string) => {
        const updated = [...urls]
        updated[index] = value
        setUrls(updated)
        onChange(updated)
    }
    console.log(urls)

    const addField = () => setUrls([...urls, ""])

    const removeField = (index: number) => {
        const updated = urls.filter((_, i) => i !== index)
        setUrls(updated)
    }

    return (
        <div className="grid gap-4">
            <Label className="text-base">URLs</Label>

            {urls.map((url, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    <Input
                        type="url"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => handleChange(idx, e.target.value)}
                    />
                    {urls.length > 1 && (
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
    )
}
