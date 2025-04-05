import Link from "next/link";
import {Facebook, Instagram, X} from "lucide-react";
import React from "react";

export default function Footer() {
    return (
    <div className="flex justify-between py-4 px-20">
        <div className="flex gap-8">
            <Link href={"/terms"}>Terms and Conditions</Link>
            <Link href={"/terms"}>Privacy Policy</Link>
        </div>

        <div className="flex flex-row gap-4">
            <Facebook/>
            <Instagram/>
            <X/>
        </div>
    </div>
    )
}