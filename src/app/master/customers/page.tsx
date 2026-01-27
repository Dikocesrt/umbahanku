"use client";

import { useState } from "react";
import StatsCard from "@/app/components/customers/StatsCard";
import CustomersTable from "@/app/components/customers/CustomersTable";
import CustomersMobile from "@/app/components/customers/CustomersMobile";
import CustomersModal from "@/app/components/customers/CustomersModal";

export default function Customers() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <StatsCard />

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


