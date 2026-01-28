"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import CustomersTable from "@/app/components/customers/CustomersTable";
import CustomersMobile from "@/app/components/customers/CustomersMobile";
import CustomersModal from "@/app/components/customers/CustomersModal";

export default function Customers() {
    const [openModal, setOpenModal] = useState(false);

    // statse Data 
    const statsData = [
        {
            title: "Total Pelanggan",
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
            bgColor: "bg-emerald-500",
            textColor: "text-emerald-100",
            icon: "users",
        },
        {
            title: "Terakhit Diperbaharui",
            value: 7,
            bgColor: "bg-blue-500",
            textColor: "text-emerald-100",
            icon: "users",
        },

    ]


    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <StatsGroup stats={statsData} />

                {/* Search, Tambah Pelanggan & Tabel - Desktop */}
                <CustomersTable onAdd={() => setOpenModal(true)} />

                {/* Search, Tambah Pelanggan, Card List Pelanggan (Mobile) */}
                <CustomersMobile onAdd={() => setOpenModal(true)} />
            </div>

            {/* POPUP TAMBAH PELANGGAN */}
            <CustomersModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );

}


