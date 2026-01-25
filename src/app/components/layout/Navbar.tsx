"use client";

interface NavbarProps {
    openSidebar: () => void;
}

export default function Navbar({ openSidebar }: NavbarProps) {
    return (
        <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-30 border-b border-gray-200/50">
            <div className="flex items-center justify-between px-4 lg:px-8 py-4">
                {/* Navbar Left - Menu Button & Search */}
                <div className="flex items-center gap-4 flex-1">
                    {/* Mobile Menu Button */}
                    <button
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
                                <p className="text-sm font-semibold text-white">
                                    Bubub
                                </p>
                                <p className="text-xs text-white/70">
                                    bub@umbahanku.com
                                </p>
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
    );
}
