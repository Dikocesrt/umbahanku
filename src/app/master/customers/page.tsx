export default function Customers() {
    return (
        <>
            <div className="space-y-4">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Total Pelanggan */}
                    <div className="relative overflow-hidden bg-cyan-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-emerald-100 text-sm font-medium">Total Pelanggan</p>
                                <p className="text-3xl font-bold text-white mt-1">7</p>
                            </div>
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
                    </div>

                    {/* Baru Hari Ini */}
                    <div className="relative overflow-hidden bg-cyan-500 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-cyan-100 text-sm font-medium">Ditambahkan Hari Ini</p>
                                <p className="text-3xl font-bold text-white mt-1">0</p>
                            </div>
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
                    </div>

                    {/* Terakhir Diperbarui */}
                    <div className="relative overflow-hidden bg-blue-400 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-violet-100 text-sm font-medium">Terakhir Diperbarui</p>
                                <p className="text-xl font-bold text-white mt-1">2 minggu lalu</p>
                            </div>
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
                    </div>
                </div>

                {/* Search, Tambah Pelanggan & Tabel - Desktop */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hidden md:block">
                    {/* Header Section */}
                    <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Data Pelanggan</h2>
                                <p className="text-sm text-gray-500">Kelola data pelanggan laundry</p>
                            </div>

                            <div className="flex flex-row gap-2 ">
                                {/* Search */}
                                <div className="relative w-full sm:w-64">
                                    <svg
                                        className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        placeholder="Cari pelanggan..."
                                        className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                                    />
                                </div>

                                {/* Tambah Pelanggan */}
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Tambah Pelanggan
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* Tabel */}
                    <table className="w-full text-sm">
                        <thead className="bg-blue-50 text-gray-600">
                            <tr>
                                <th className="px-4 py-3 text-center font-semibold w-14">No</th>
                                <th className="px-4 py-3 text-center font-semibold">Nama</th>
                                <th className="px-4 py-3 text-center font-semibold">Alamat</th>
                                <th className="px-4 py-3 text-center font-semibold">No HP</th>
                                <th className="px-4 py-3 text-center font-semibold">Tgl Registrasi</th>
                                <th className="px-4 py-3 text-center font-semibold w-24">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-center text-gray-500">1</td>
                                <td className="px-4 py-3 text-center font-medium text-gray-900">Budi Santoso</td>
                                <td className="px-4 py-3 text-center text-gray-600">Bangunharjo, Kec. Sewon, Kabupaten Bantul, DIY</td>
                                <td className="px-4 py-3 text-center text-gray-600">081234567890</td>
                                <td className="px-4 py-3 text-center text-gray-600">27 Jan 2026</td>
                                <td className="px-4 py-3 text-center">
                                    <div className="flex justify-center gap-2">
                                        <button className="p-1.5 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.8506 12.0002V6.50992C20.8506 4.48846 19.2118 2.84973 17.1904 2.84973H6.5098C4.48833 2.84973 2.84961 4.48845 2.84961 6.50992V17.4905C2.84961 19.512 4.48833 21.1507 6.5098 21.1507H11.8501" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                                <path d="M7.00269 12H10.0018" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                                <path d="M7.00269 8.0022H12.9993" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                                <path d="M20.79 15.8827L18.8369 13.8971C18.6389 13.6957 18.3177 13.6957 18.1196 13.8971L14.3632 17.716C14.2545 17.8266 14.201 17.9813 14.2177 18.1368L14.4325 20.1323C14.4455 20.2525 14.5388 20.3474 14.657 20.3605L16.6198 20.5789C16.7727 20.5959 16.9249 20.5415 17.0337 20.431L20.79 16.612C20.9881 16.4106 20.9881 16.0841 20.79 15.8827Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className="p-1.5 rounded-lg bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                                <path d="M5.7372 6.54395V18.9857C5.7372 19.7449 6.35269 20.3604 7.11194 20.3604H16.8894C17.6487 20.3604 18.2642 19.7449 18.2642 18.9857V6.54395M2.90918 6.54395H21.091" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Search, Tambah Pelanggan, Card List Pelanggan (Mobile) */}
                <div className="md:hidden space-y-3 rounded-xl p-3 shadow-sm border border-gray-200">
                    {/* Header Section Mobile */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Data Pelanggan</h2>
                            <p className="text-xs text-gray-500">Kelola data pelanggan laundry</p>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 p-1">
                            {/* Search Icon */}
                            <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            {/* Add Icon */}
                            <button className="p-2 rounded-lg bg-emerald-500 text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Card Pelanggan 1 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">

                        <div className="flex items-start justify-between mb-3">
                            {/* Nama Pelanggan */}
                            <div>
                                <h3 className="font-semibold text-gray-900">Budi Santoso</h3>
                                <p className="text-gray-500 text-xs mt-0.5">081234567890</p>
                            </div>
                            {/* Aksi Edit & Hapus */}
                            <div className="flex gap-2">
                                <button className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8506 12.0002V6.50992C20.8506 4.48846 19.2118 2.84973 17.1904 2.84973H6.5098C4.48833 2.84973 2.84961 4.48845 2.84961 6.50992V17.4905C2.84961 19.512 4.48833 21.1507 6.5098 21.1507H11.8501" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M7.00269 12H10.0018" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M7.00269 8.0022H12.9993" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M20.79 15.8827L18.8369 13.8971C18.6389 13.6957 18.3177 13.6957 18.1196 13.8971L14.3632 17.716C14.2545 17.8266 14.201 17.9813 14.2177 18.1368L14.4325 20.1323C14.4455 20.2525 14.5388 20.3474 14.657 20.3605L16.6198 20.5789C16.7727 20.5959 16.9249 20.5415 17.0337 20.431L20.79 16.612C20.9881 16.4106 20.9881 16.0841 20.79 15.8827Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <button className="p-1.5 rounded-lg bg-red-100 text-red-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M5.7372 6.54395V18.9857C5.7372 19.7449 6.35269 20.3604 7.11194 20.3604H16.8894C17.6487 20.3604 18.2642 19.7449 18.2642 18.9857V6.54395M2.90918 6.54395H21.091" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Info */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="text-gray-500 text-xs">Alamat</p>
                                <p className="text-gray-700">Bangunharjo, Kec. Sewon, Bantul, DIY</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Tgl Registrasi</p>
                                <p className="text-gray-700">27 Jan 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Card Pelanggan 1 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">

                        <div className="flex items-start justify-between mb-3">
                            {/* Nama Pelanggan */}
                            <div>
                                <h3 className="font-semibold text-gray-900">Budi Santoso</h3>
                                <p className="text-gray-500 text-xs mt-0.5">081234567890</p>
                            </div>
                            {/* Aksi Edit & Hapus */}
                            <div className="flex gap-2">
                                <button className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8506 12.0002V6.50992C20.8506 4.48846 19.2118 2.84973 17.1904 2.84973H6.5098C4.48833 2.84973 2.84961 4.48845 2.84961 6.50992V17.4905C2.84961 19.512 4.48833 21.1507 6.5098 21.1507H11.8501" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M7.00269 12H10.0018" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M7.00269 8.0022H12.9993" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M20.79 15.8827L18.8369 13.8971C18.6389 13.6957 18.3177 13.6957 18.1196 13.8971L14.3632 17.716C14.2545 17.8266 14.201 17.9813 14.2177 18.1368L14.4325 20.1323C14.4455 20.2525 14.5388 20.3474 14.657 20.3605L16.6198 20.5789C16.7727 20.5959 16.9249 20.5415 17.0337 20.431L20.79 16.612C20.9881 16.4106 20.9881 16.0841 20.79 15.8827Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <button className="p-1.5 rounded-lg bg-red-100 text-red-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M5.7372 6.54395V18.9857C5.7372 19.7449 6.35269 20.3604 7.11194 20.3604H16.8894C17.6487 20.3604 18.2642 19.7449 18.2642 18.9857V6.54395M2.90918 6.54395H21.091" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Info */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="text-gray-500 text-xs">Alamat</p>
                                <p className="text-gray-700">Bangunharjo, Kec. Sewon, Bantul, DIY</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Tgl Registrasi</p>
                                <p className="text-gray-700">27 Jan 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}