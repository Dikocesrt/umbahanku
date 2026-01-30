export default function ServicesDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-cyan-600 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                        Detail Layanan
                    </h3>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                    {/* Gambar & Nama */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                            <img src="/scucikering.png" alt="Cuci Kering" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Cuci Kering</h3>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mt-1">
                                Reguler
                            </span>
                        </div>
                    </div>

                    {/* Info Detail */}
                    <div className="space-y-4">
                        {/* Harga */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 font-medium">Harga</span>
                            </div>
                            <span className="text-lg font-bold text-emerald-600">Rp 7.000/Kg</span>
                        </div>

                        {/* Durasi */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 font-medium">Durasi</span>
                            </div>
                            <span className="text-lg font-bold text-blue-600">2 Hari</span>
                        </div>

                        {/* Satuan */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 font-medium">Satuan</span>
                            </div>
                            <span className="text-lg font-bold text-orange-600">Kilogram (Kg)</span>
                        </div>

                        {/* Tanggal Dibuat */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 font-medium">Tanggal Dibuat</span>
                            </div>
                            <span className="text-lg font-bold text-purple-600">27 Jan 2026</span>
                        </div>
                    </div>

                    {/* Tombol Tutup */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
