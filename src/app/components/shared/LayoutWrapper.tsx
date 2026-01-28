"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar openSidebar={openSidebar} />
                {children}
            </div>
        </div>
    );
}
