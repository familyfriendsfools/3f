import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DynamicURLInputs } from "@/components/dinamicUrl";

function Details({ formData, onChange }) {

    console.log(" #",formData.urls);
    return (
        <div className="space-y-4">
            <div className="flex flex-col space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    type="text"
                    value={formData.description}
                    onChange={(e) => onChange("description", e.target.value)}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="picture">Picture</Label>
                <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange("picture", e.target.files[0])}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="video">Video</Label>
                <Input
                    id="video"
                    type="file"
                    accept="video/*"
                    onChange={(e) => onChange("video", e.target.files[0])}
                />
            </div>
            <DynamicURLInputs
                urls={formData.urls}
                onChange={(urls) => onChange("urls", urls)}
            />
        </div>
    );
}

export default Details;
