export default function AdminsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-400 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                        Tambah Admin
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
                        <label className="block text-sm text-gray-500 font-medium mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            placeholder="Masukkan nama admin"
                        />
                    </div>

                    {/* Input Username */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            placeholder="Contoh: admin123"
                        />
                    </div>



                    {/* Input Password */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            placeholder="Masukkan password"
                        />
                    </div>

                    {/* Input Status */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-500 font-medium mb-2">Status</label>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="status"
                                    value="aktif"
                                    defaultChecked
                                    className="hidden peer"
                                />
                                <div className="border-2 border-gray-200 rounded-xl p-3 text-center transition-all 
                                    peer-checked:border-green-500 peer-checked:bg-green-100 peer-checked:shadow-md peer-checked:shadow-green-200
                                    hover:border-green-300 active:scale-95">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-200 peer-checked:bg-green-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 peer-checked:text-green-700">Aktif</span>
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="status"
                                    value="nonaktif"
                                    className="hidden peer"
                                />
                                <div className="border-2 border-gray-200 rounded-xl p-3 text-center transition-all 
                                    peer-checked:border-red-500 peer-checked:bg-red-100 peer-checked:shadow-md peer-checked:shadow-red-200
                                    hover:border-red-300 active:scale-95">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-red-200 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 peer-checked:text-red-700">Nonaktif</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Batal</button>
                        <button className="bg-blue-400 text-white px-4 py-2 rounded-lg">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
