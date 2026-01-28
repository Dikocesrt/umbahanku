"use client";

import { useState } from "react";

export default function AdminsMobile({ onAdd }: { onAdd: () => void }) {
    const [showPassword, setShowPassword] = useState<{ [key: number]: boolean }>({});

    const togglePassword = (id: number) => {
        setShowPassword(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Data dummy admin
    const admins = [
        { id: 1, nama: "Admin Utama", username: "admin", password: "admin123", status: "Aktif", createdAt: "28 Jan 2026" },
        { id: 2, nama: "Budi Santoso", username: "budi_kasir", password: "budi456", status: "Aktif", createdAt: "27 Jan 2026" },
    ];

    return (
        <div className="md:hidden space-y-3 rounded-xl p-3 shadow-sm border border-gray-200">
            {/* Header Section Mobile */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Data Admin</h2>
                    <p className="text-xs text-gray-500">Kelola data admin laundry</p>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-2 p-1">
                    {/* Search Icon */}
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* Add Icon */}
                    <button onClick={() => onAdd()} className="p-2 rounded-lg bg-emerald-500 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Admin Cards */}
            {admins.map((admin) => (
                <div key={admin.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold text-gray-900">{admin.nama}</h3>
                            <p className="text-xs text-gray-500">@{admin.username}</p>
                        </div>
                        {/* Aksi */}
                        <div className="flex gap-2">
                            <button className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8506 12.0002V6.50992C20.8506 4.48846 19.2118 2.84973 17.1904 2.84973H6.5098C4.48833 2.84973 2.84961 4.48845 2.84961 6.50992V17.4905C2.84961 19.512 4.48833 21.1507 6.5098 21.1507H11.8501" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    <path d="M7.00269 12H10.0018" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    <path d="M7.00269 8.0022H12.9993" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    <path d="M20.79 15.8827L18.8369 13.8971C18.6389 13.6957 18.3177 13.6957 18.1196 13.8971L14.3632 17.716C14.2545 17.8266 14.201 17.9813 14.2177 18.1368L14.4325 20.1323C14.4455 20.2525 14.5388 20.3474 14.657 20.3605L16.6198 20.5789C16.7727 20.5959 16.9249 20.5415 17.0337 20.431L20.79 16.612C20.9881 16.4106 20.9881 16.0841 20.79 15.8827Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                </svg>
                            </button>
                            <button className="p-1.5 rounded-lg bg-red-100 text-red-600">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    <path d="M5.7372 6.54395V18.9857C5.7372 19.7449 6.35269 20.3604 7.11194 20.3604H16.8894C17.6487 20.3604 18.2642 19.7449 18.2642 18.9857V6.54395M2.90918 6.54395H21.091" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                            <p className="text-gray-500 text-xs">Password</p>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-700 text-xs">{showPassword[admin.id] ? admin.password : "••••••••"}</span>
                                <button
                                    onClick={() => togglePassword(admin.id)}
                                    className="p-0.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition"
                                >
                                    {showPassword[admin.id] ? (
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs">Status</p>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${admin.status === "Aktif" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {admin.status}
                            </span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs">Dibuat</p>
                            <p className="text-gray-700 text-xs">{admin.createdAt}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
