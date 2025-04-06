import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Details() {
    return (
        <div className="space-y-4">
            <div className="flex flex-col space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input id="description" type="text" />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="video">Video</Label>
                <Input id="video" type="file" />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="url">URL</Label>
                <Input id="url" type="url" placeholder="https://example.com" />
            </div>
        </div>
    );
}

export default Details;
