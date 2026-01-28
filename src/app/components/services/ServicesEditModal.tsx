export default function ServicesEditModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-amber-500 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                        Edit Layanan Laundry
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
                    {/* Input Gambar */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Gambar Layanan</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-amber-400 transition cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="edit-image-upload"
                            />
                            <label htmlFor="edit-image-upload" className="cursor-pointer">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-500">Klik untuk ganti gambar</p>
                                <p className="text-xs text-gray-400 mt-1">PNG, JPG (Max 2MB)</p>
                            </label>
                        </div>
                    </div>

                    {/* Input Nama */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Nama Layanan</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                            defaultValue="Cuci Kering"
                        />
                    </div>

                    {/* Input Jenis Layanan */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Jenis Layanan</label>
                        <select
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                            defaultValue="reguler"
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
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                            defaultValue="7000"
                        />
                    </div>

                    {/* Input Satuan */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-2">Satuan</label>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="edit-satuan"
                                    value="pcs"
                                    className="hidden peer"
                                />
                                <div className="border-2 border-gray-200 rounded-xl p-3 text-center transition-all 
                                    peer-checked:border-blue-500 peer-checked:bg-blue-100 peer-checked:shadow-md peer-checked:shadow-blue-200
                                    hover:border-blue-300 active:scale-95">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-200 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 peer-checked:text-blue-700">Pcs</span>
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="edit-satuan"
                                    value="kg"
                                    defaultChecked
                                    className="hidden peer"
                                />
                                <div className="border-2 border-gray-200 rounded-xl p-3 text-center transition-all 
                                    peer-checked:border-orange-500 peer-checked:bg-orange-100 peer-checked:shadow-md peer-checked:shadow-orange-200
                                    hover:border-orange-300 active:scale-95">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-orange-200 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 peer-checked:text-orange-700">Kg</span>
                                </div>
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
                                className="w-24 px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                                defaultValue="2"
                            />
                            <select
                                className="flex-1 px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                                defaultValue="hari"
                            >
                                <option value="jam">Jam</option>
                                <option value="hari">Hari</option>
                            </select>
                        </div>
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
