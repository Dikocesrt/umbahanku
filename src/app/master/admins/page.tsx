"use client";

import { useState } from "react";
import StatsGroup from "@/app/components/shared/stats/StatsGroup";
import AdminsTable from "@/app/components/admins/AdminsTable";
import AdminsMobile from "@/app/components/admins/AdminsMobile";
import AdminsModal from "@/app/components/admins/AdminsModal";
import DeleteConfirmModal from "@/app/components/shared/DeleteConfirmModal";

export default function Admins() {
    const [openModal, setOpenModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        console.log("Data admin dihapus!");
        setShowDeleteModal(false);
    };

    // Stats Data
    const statsData = [
        {
            title: "Total Admin",
            value: 3,
            bgColor: "bg-cyan-600",
            textColor: "text-white",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Admin Aktif",
            value: 2,
            bgColor: "bg-cyan-700",
            textColor: "text-white",
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
            bgColor: "bg-cyan-800",
            textColor: "text-white",
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
                <AdminsTable onAdd={() => setOpenModal(true)} onDelete={() => setShowDeleteModal(true)} />

                {/* List Admin - Mobile */}
                <AdminsMobile onAdd={() => setOpenModal(true)} onDelete={() => setShowDeleteModal(true)} />
            </div>

            {/* Modal Tambah Admin */}
            <AdminsModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

            {/* Modal Delete Confirm */}
            <DeleteConfirmModal
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                title="Hapus Admin"
                message="Apakah Anda yakin ingin menghapus admin ini? Data yang dihapus tidak dapat dikembalikan."
            />
        </>
    );
}
