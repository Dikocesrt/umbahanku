"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import CustomersTable from "@/app/components/customers/CustomersTable";
import CustomersMobile from "@/app/components/customers/CustomersMobile";
import CustomersModal from "@/app/components/customers/CustomersModal";
import DeleteConfirmModal from "@/app/components/shared/DeleteConfirmModal";

export default function Customers() {
    const [openModal, setOpenModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        console.log("Data pelanggan dihapus!");
        setShowDeleteModal(false);
    };

    // statse Data 
    const statsData = [
        {
            title: "Total Pelanggan",
            value: 7,
            bgColor: "bg-cyan-600",
            textColor: "text-white",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Ditambahkan Hari Ini",
            value: 7,
            bgColor: "bg-cyan-700",
            textColor: "text-white",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
        },
        {
            title: "Terakhir Diperbaharui",
            value: 7,
            bgColor: "bg-cyan-800",
            textColor: "text-white",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },

    ]


    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <StatsGroup stats={statsData} />

                {/* Search, Tambah Pelanggan & Tabel - Desktop */}
                <CustomersTable
                    onAdd={() => setOpenModal(true)}
                    onDelete={() => setShowDeleteModal(true)}
                />

                {/* Search, Tambah Pelanggan, Card List Pelanggan (Mobile) */}
                <CustomersMobile
                    onAdd={() => setOpenModal(true)}
                    onDelete={() => setShowDeleteModal(true)}
                />
            </div>

            {/* POPUP TAMBAH PELANGGAN */}
            <CustomersModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

            {/* Modal Delete Confirm */}
            <DeleteConfirmModal
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                title="Hapus Pelanggan"
                message="Apakah Anda yakin ingin menghapus pelanggan ini? Data yang dihapus tidak dapat dikembalikan."
            />
        </>
    );

}
