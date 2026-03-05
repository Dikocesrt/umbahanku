"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutWrapperProps {
    children: React.ReactNode;
}

// Halaman yang tidak perlu Sidebar & Navbar
const noLayoutRoutes = ["/login"];

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        document.body.style.overflow = "";
    };

    // Jika route termasuk noLayoutRoutes, render tanpa Sidebar & Navbar
    if (noLayoutRoutes.includes(pathname)) {
        return <>{children}</>;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar openSidebar={openSidebar} />
                <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
