"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import TabelService from "@/app/components/services/TabelService";
import ServicesModal from "@/app/components/services/ServicesModal";
import ServicesEditModal from "@/app/components/services/ServicesEditModal";
import DeleteConfirmModal from "@/app/components/shared/DeleteConfirmModal";
import ListServiceMobile from "@/app/components/services/ListServiceMobile";

export default function Services() {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        // Logika hapus data di sini
        console.log("Data dihapus!");
        setShowDeleteModal(false);
    };

    const statsData = [
        {
            title: "Total Layanan",
            value: 7,
            bgColor: "bg-cyan-600",
            textColor: "text-white",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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

                {/* Tabel Layanan - Desktop */}
                <TabelService
                    onAdd={() => setShowModal(true)}
                    onEdit={() => setShowEditModal(true)}
                    onDelete={() => setShowDeleteModal(true)}
                />

                {/* Card List Layanan(Mobile) */}
                <div className="md:hidden space-y-2 rounded-xl p-3 shadow-sm border border-gray-200">
                    <ListServiceMobile
                        onAdd={() => setShowModal(true)}
                        onEdit={() => setShowEditModal(true)}
                        onDelete={() => setShowDeleteModal(true)}
                    />
                </div>

            </div>

            {/* Modal Tambah */}
            <ServicesModal open={showModal} onClose={() => setShowModal(false)} />

            {/* Modal Edit */}
            <ServicesEditModal open={showEditModal} onClose={() => setShowEditModal(false)} />

            {/* Modal Delete Confirm */}
            <DeleteConfirmModal
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                title="Hapus Layanan"
                message="Apakah Anda yakin ingin menghapus layanan ini? Data yang dihapus tidak dapat dikembalikan."
            />
        </>
    );
}
