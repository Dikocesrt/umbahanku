export default function ServicesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-400 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                        Tambah Layanan Laundry
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
                        <label className="block text-sm text-gray-500 font-medium mb-1">Nama Layanan</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            placeholder="Contoh : Cuci Kering"
                        />
                    </div>

                    {/* Input No HP */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Jenis Layanan</label>
                        <select
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            defaultValue=""
                        >
                            <option value="" disabled>Pilih Jenis Layanan</option>
                            <option value="reguler">Reguler</option>
                            <option value="express">Express</option>
                            <option value="premium">Premium</option>
                            <option value="satuan">Satuan</option>
                        </select>
                    </div>

                    {/* Input Harga */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Harga</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            placeholder="Contoh : 10000"
                        />
                    </div>

                    {/* Input Satuan */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-2">Satuan</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="satuan"
                                    value="pcs"
                                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                                />
                                <span className="text-sm text-gray-700">Pcs</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="satuan"
                                    value="kg"
                                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                                />
                                <span className="text-sm text-gray-700">Kg</span>
                            </label>
                        </div>
                    </div>

                    {/* Input Durasi */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Durasi</label>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                min="1"
                                className="w-24 px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                                placeholder="2"
                            />
                            <select
                                className="flex-1 px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                                defaultValue="hari"
                            >
                                <option value="jam">Jam</option>
                                <option value="hari">Hari</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg"> Batal</button>
                        <button className="bg-blue-400 text-white px-4 py-2 rounded-lg">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}