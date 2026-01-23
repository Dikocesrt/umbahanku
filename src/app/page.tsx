"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
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
    <div className="bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Overlay (Mobile Only) */}
        <div
          id="sidebarOverlay"
          onClick={closeSidebar}
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        ></div>

        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`fixed lg:static inset-y-0 left-0 w-60 bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
        >
          {/* Sidebar Header - Logo */}
          <div className="border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
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
                  <p className="text-[10px] text-gray-400">Dashboard</p>
                </div>
              </div>
              {/* Close Button (Mobile Only) */}
              <button
                id="closeSidebar"
                onClick={closeSidebar}
                className="lg:hidden p-1.5 mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-3 py-2 space-y-0.5">
            {/* Menu Section: Main */}
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">
              Main Menu
            </p>

            {/* Menu Item: Dashboard (Active) */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-white bg-blue-300 rounded-lg shadow-md shadow-blue-300/20 transition-all"
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
            </a>

            {/* Menu Section: Pesanan */}
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
              Pesanan
            </p>

            {/* Buat Pesanan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Daftar Pesanan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Proses Cucian */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Pengambilan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Menu Section: Data Laundry */}
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
              Data Laundry
            </p>

            {/* Data Layanan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Data Pelanggan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Data Admin */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Menu Section: Laporan */}
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1 mt-4">
              Laporan
            </p>

            {/* Pemasukan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Pesanan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>

            {/* Aktifitas Karyawan */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>
          </nav>

          {/* Settings - Fixed at Bottom */}
          <div className="px-3 py-3 border-t border-gray-100 mt-auto">
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-300 hover:bg-blue-50 rounded-lg transition-all"
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
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          {/* Navbar Mobile */}
          <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-30 border-b border-gray-200/50">
            <div className="flex items-center justify-between px-4 lg:px-8 py-4">
              {/* Navbar Left - Menu Button & Search */}
              <div className="flex items-center gap-4 flex-1">
                {/* Mobile Menu Button */}
                <button
                  id="openSidebar"
                  onClick={openSidebar}
                  className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Search Bar */}
                <div className="relative hidden sm:block w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Cari..."
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Navbar Right - Actions & Profile */}
              <div className="flex items-center gap-2 lg:gap-3">
                {/* Mobile Search Button */}
                <button className="sm:hidden p-2.5 text-gray-500 hover:text-blue-300 hover:bg-blue-300/10 rounded-xl transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                {/* Divider */}
                <div className="hidden lg:block w-px h-8 bg-gray-200 mx-1"></div>

                {/* Notification Button */}
                <button className="relative p-2.5 text-gray-500 hover:text-blue-300 hover:bg-blue-300/10 rounded-xl transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                {/* Divider */}
                <div className="hidden sm:block w-px h-8 bg-gray-200 mx-1"></div>

                {/* Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-xl transition-all">
                    <img
                      src="https://ui-avatars.com/api/?name=John+Doe&background=93c5fd&color=fff"
                      alt="Profile"
                      className="w-9 h-9 rounded-xl ring-2 ring-blue-300/20"
                    />
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-800">
                        Bubub
                      </p>
                      <p className="text-xs text-gray-500">Karyawan</p>
                    </div>
                    <svg
                      className="hidden md:block w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                    <div className="p-3 bg-gradient-to-r from-blue-300 to-blue-200">
                      <p className="text-sm font-semibold text-white">Bubub</p>
                      <p className="text-xs text-white/70">bub@umbahanku.com</p>
                    </div>
                    <div className="p-2">
                      <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-all"
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
                        Account Settings
                      </a>
                    </div>
                    <div className="p-2 border-t border-gray-100">
                      <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all"
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
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Sign Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-500 mt-1">
                Welcome back, Bubub! Here&apos;s what&apos;s happening today.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
