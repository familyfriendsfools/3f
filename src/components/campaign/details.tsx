import React, {useState} from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {DynamicURLInputs} from "@/components/dinamicUrl";


function Details() {
    let idx = 0;
    return (
        <div className="space-y-4">
            <div className="flex flex-col space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text"/>
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input id="description" type="text"/>
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" accept="image/*"/>
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="video">Video</Label>
                <Input id="video" type="file" accept="video/*"/>
            </div>
            <DynamicURLInputs/>

        </div>
    );
}

export default Details;
