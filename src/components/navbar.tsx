import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between py-4 px-20"
             style={{background: "#545454"}}
        >
            <Link href="/">
                <Image src={"/logo.png"} alt="Logo" width={150} height={50} />
            </Link>

            <NavigationMenu>
                <NavigationMenuList className="gap-6">
                    <NavigationMenuItem>
                        <Link href="/initialCarousel">
                            <button className="bg-[#ff9800] text-white font-semibold px-4 py-2 rounded hover:bg-[#e27f00] transition duration-200">
                                Getting to Know You
                            </button>
                        </Link>
                    </NavigationMenuItem>
                    {/*
                    <NavigationMenuItem>
                        <Link href="/about">
                            About Us
                        </Link>
                    </NavigationMenuItem>
                    */}
                    {/* Profile dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel asChild><a href="/settings">Settings</a></DropdownMenuLabel>
                                <DropdownMenuItem>Impact</DropdownMenuItem>
                                <DropdownMenuItem asChild><a href="/campaigns">Campaigns</a></DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
