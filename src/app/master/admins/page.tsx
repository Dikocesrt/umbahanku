"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import AdminsTable from "@/app/components/admins/AdminsTable";
import AdminsMobile from "@/app/components/admins/AdminsMobile";
import AdminsModal from "@/app/components/admins/AdminsModal";

export default function Admins() {
    const [openModal, setOpenModal] = useState(false);

    // Stats Data
    const statsData = [
        {
            title: "Total Admin",
            value: 3,
            bgColor: "bg-indigo-500",
            textColor: "text-indigo-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            title: "Admin Aktif",
            value: 2,
            bgColor: "bg-green-500",
            textColor: "text-green-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Admin Nonaktif",
            value: 1,
            bgColor: "bg-emerald-500",
            textColor: "text-emerald-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <StatsGroup stats={statsData} />

                {/* Tabel Admin - Desktop */}
                <AdminsTable onAdd={() => setOpenModal(true)} />

                {/* List Admin - Mobile */}
                <AdminsMobile onAdd={() => setOpenModal(true)} />
            </div>

            {/* Modal Tambah Admin */}
            <AdminsModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
}
