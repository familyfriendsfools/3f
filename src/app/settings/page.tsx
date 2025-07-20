import { Info, Search } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function SettingsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white py-10 px-6">
                <h1 className="text-4xl font-bold text-[#B97B00] text-center mb-10">Settings</h1>

                {/* Tabs */}
                <div className="flex justify-center items-center gap-4 mb-6">
                    <button className="bg-[#FFEFD4] text-[#B97B00] px-4 py-2 rounded shadow">Account</button>
                    <button className="bg-white text-[#B97B00] px-4 py-2 border border-[#B97B00] rounded">Notifications</button>
                    <div className="ml-4 flex items-center gap-2">
                        <Link href="/" locale="pt">
                            <Image src="/icons/pt.svg" alt="Português" width={30} height={20}/>
                        </Link>
                        <Link href="/" locale="en">
                            <Image src="/icons/uk.svg" alt="English" width={30} height={20}/>
                        </Link>
                    </div>
                </div>

                {/* Profile picture */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-28 h-28 rounded-full bg-[#F2F2F2] flex items-center justify-center mb-2">
                        <Search className="text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">Add picture</p>
                </div>

                {/* Account details */}
                <div className="max-w-md mx-auto space-y-6">
                    <div className="flex justify-between items-center border-b pb-1">
                        <div>
                            <p className="text-xs text-gray-400">Name</p>
                            <p className="font-medium">João Guilherme</p>
                        </div>
                        <button className="px-4 py-1 text-sm rounded bg-gray-200">Edit</button>
                    </div>

                    <div className="border-b pb-1 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-400">Phone Number</p>
                            <p>+351 *** *** ***</p>
                        </div>
                        <Info className="w-4 h-4 text-gray-500" />
                    </div>

                    <div className="border-b pb-1 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-400">Email</p>
                            <p>JoaoG92d@gmail.com</p>
                        </div>
                        <Info className="w-4 h-4 text-gray-500" />
                    </div>

                    <div className="border-b pb-1 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-400">Password</p>
                            <p>*** *** ***</p>
                        </div>
                        <Info className="w-4 h-4 text-gray-500" />
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        Deleting your account will remove all your activities and campaigns, and you may not be able to recover.
                    </p>

                    <div className="text-center">
                        <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50">
                            Exclude Account
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
