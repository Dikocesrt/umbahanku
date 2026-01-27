"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    sidebarOpen: boolean;
    closeSidebar: () => void;
}

export default function Sidebar({ sidebarOpen, closeSidebar }: SidebarProps) {
    const pathname = usePathname();

    // Helper function to check if link is active
    const isActive = (path: string) => pathname === path;

    // Style classes
    const activeClass = "flex items-center gap-2 px-3 py-2 text-white bg-blue-300 rounded-lg shadow-md shadow-blue-300/20 transition-all";
    const inactiveClass = "flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all";

    return (
        <>
            {/* Sidebar Overlay (Mobile Only) */}
            <div
                onClick={closeSidebar}
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 w-60 bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-300 ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Sidebar Header - Logo */}
                <div className="border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="hidden lg:flex items-center">
                            <Image
                                src="/loundrylogo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className=" w-25 h-25 object-contain"
                            />
                            <div className=" -ml-2 ">
                                <span className="text-lg font-bold text-blue-300">
                                    UMBAHANKU
                                </span>
                                <p className="text-[10px] text-gray-400">
                                    Dashboard
                                </p>
                            </div>
                        </div>
                        {/* (Mobile Only) */}
                        <button
                            onClick={closeSidebar}
                            className="flex items-center md:hidden p-1.5 mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        >
                            <Image
                                src="/loundrylogo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="w-25 h-25 object-contain"
                            />
                            <div className="-ml-2">
                                <span className="text-lg font-bold text-blue-300">
                                    UMBAHANKU
                                </span>
                                <p className="text-[10px] text-gray-400">
                                    Dashboard
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
                    {/* Menu Section: Main */}
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">
                        Main Menu
                    </p>

                    {/* Menu Item: Dashboard */}
                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className={isActive("/") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>

                    {/* Menu Section: Pesanan */}
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
                        Pesanan
                    </p>

                    {/* Buat Pesanan */}
                    <Link
                        href="/orders/new"
                        onClick={closeSidebar}
                        className={isActive("/orders/new") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        <span className="text-sm font-medium">Buat Pesanan</span>
                    </Link>

                    {/* Daftar Pesanan */}
                    <Link
                        href="/orders"
                        onClick={closeSidebar}
                        className={isActive("/orders") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                        <span className="text-sm font-medium">Daftar Pesanan</span>
                    </Link>

                    {/* Proses Cucian */}
                    <Link
                        href="/orders/process"
                        onClick={closeSidebar}
                        className={isActive("/orders/process") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                        <span className="text-sm font-medium">Proses Cucian</span>
                        <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-300 rounded-full">
                            12
                        </span>
                    </Link>

                    {/* Pengambilan */}
                    <Link
                        href="/orders/pickup"
                        onClick={closeSidebar}
                        className={isActive("/orders/pickup") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                        </svg>
                        <span className="text-sm font-medium">Pengambilan</span>
                        <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-500 rounded-full">
                            5
                        </span>
                    </Link>

                    {/* Menu Section: Data Laundry */}
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
                        Data Laundry
                    </p>

                    {/* Data Layanan */}
                    <Link
                        href="/master/services"
                        onClick={closeSidebar}
                        className={isActive("/services") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                        <span className="text-sm font-medium">Data Layanan</span>
                    </Link>

                    {/* Data Pelanggan */}
                    <Link
                        href="/customers"
                        onClick={closeSidebar}
                        className={isActive("/customers") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Data Pelanggan</span>
                    </Link>

                    {/* Data Admin */}
                    <Link
                        href="/admins"
                        onClick={closeSidebar}
                        className={isActive("/admins") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Data Admin</span>
                    </Link>

                    {/* Menu Section: Laporan */}
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
                        Laporan
                    </p>

                    {/* Pemasukan */}
                    <Link
                        href="/reports/income"
                        onClick={closeSidebar}
                        className={isActive("/reports/income") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Pemasukan</span>
                    </Link>

                    {/* Laporan Pesanan */}
                    <Link
                        href="/reports/orders"
                        onClick={closeSidebar}
                        className={isActive("/reports/orders") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Pesanan</span>
                    </Link>

                    {/* Aktifitas Karyawan */}
                    <Link
                        href="/reports/activity"
                        onClick={closeSidebar}
                        className={isActive("/reports/activity") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Aktifitas Karyawan</span>
                    </Link>
                </nav>

                {/* Settings - Fixed at Bottom */}
                <div className="px-3 py-3 border-t border-gray-100 mt-auto">
                    <Link
                        href="/settings"
                        onClick={closeSidebar}
                        className={isActive("/settings") ? activeClass : inactiveClass}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
