export default function CustomersEditModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-amber-500 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                        Edit Pelanggan
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

                {/* Form Content */}
                <div className="p-4 md:p-6">
                    {/* Input Nama */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Nama</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                            defaultValue="Budi Santoso"
                        />
                    </div>

                    {/* Input No HP */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">No HP</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                            defaultValue="081234567890"
                        />
                    </div>

                    {/* Input Alamat */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Alamat</label>
                        <textarea
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500 resize-none"
                            rows={3}
                            defaultValue="Bangunharjo, Kec. Sewon, Kabupaten Bantul, DIY"
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Batal</button>
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
