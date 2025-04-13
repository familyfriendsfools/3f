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
                        <Link href="/createCampaign">
                            Create Campaign
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about">
                            About Us
                        </Link>
                    </NavigationMenuItem>

                    {/* Profile dropdown */}
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                <DropdownMenuItem>Impact</DropdownMenuItem>
                                <DropdownMenuItem>Campaigns</DropdownMenuItem>
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
