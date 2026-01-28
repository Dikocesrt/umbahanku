"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import TabelService from "@/app/components/services/TabelService";
import ServicesModal from "@/app/components/services/ServicesModal";
import ListServiceMobile from "@/app/components/services/ListServiceMobile";

export default function Services() {

    const [showModal, setShowModal] = useState(false);

    const statsData = [
        {
            title: "Total Layanan",
            value: 7,
            bgColor: "bg-cyan-600",
            textColor: "text-emerald-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Ditambahkan Hari Ini",
            value: 7,
            bgColor: "bg-cyan-600",
            textColor: "text-emerald-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Terakhir Diperbaharui",
            value: 7,
            bgColor: "bg-cyan-600",
            textColor: "text-emerald-100",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 0 016 0z" />
                </svg>
            ),
        },

    ]
    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <StatsGroup stats={statsData} />

                {/* Tabel Layanan - Desktop */}
                <TabelService onAdd={() => setShowModal(true)} />

                {/* Card List Layanan(Mobile) */}
                <div className="md:hidden space-y-6 rounded-xl p-3 shadow-sm border border-gray-200">
                    <ListServiceMobile onAdd={() => setShowModal(true)} />
                </div>

            </div>

            {/* Modal */}
            <ServicesModal open={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}
