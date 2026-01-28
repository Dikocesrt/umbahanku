export default function AdminsTable({ onAdd, onDelete }: { onAdd: () => void, onDelete: () => void }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hidden md:block">
            {/* Header Section */}
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Data Admin</h2>
                        <p className="text-sm text-gray-500">Kelola data admin laundry</p>
                    </div>

                    <div className="flex flex-row gap-2">
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
                                placeholder="Cari admin..."
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500"
                            />
                        </div>

                        {/* Tambah Admin */}
                        <button
                            onClick={() => onAdd()}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Admin
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-blue-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-center font-semibold w-14">No</th>
                            <th className="px-4 py-3 text-center font-semibold">Nama Lengkap</th>
                            <th className="px-4 py-3 text-center font-semibold">Username</th>
                            <th className="px-4 py-3 text-center font-semibold">Status</th>
                            <th className="px-4 py-3 text-center font-semibold">Waktu Dibuat</th>
                            <th className="px-4 py-3 text-center font-semibold w-24">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Data Admin 1 */}
                        <tr className="hover:bg-gray-50 transition">
                            <td className="px-4 py-3 text-center text-gray-500">1</td>
                            <td className="px-4 py-3 text-center font-medium text-gray-900">Admin Utama</td>
                            <td className="px-4 py-3 text-center text-gray-600">admin</td>
                            <td className="px-4 py-3 text-center">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-medium">
                                    Aktif
                                </span>
                            </td>
                            <td className="px-4 py-3 text-center text-gray-600">28 Jan 2026</td>
                            <td className="px-4 py-3 text-center">
                                <div className="flex justify-center gap-2">
                                    <button className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.8506 12.0002V6.50992C20.8506 4.48846 19.2118 2.84973 17.1904 2.84973H6.5098C4.48833 2.84973 2.84961 4.48845 2.84961 6.50992V17.4905C2.84961 19.512 4.48833 21.1507 6.5098 21.1507H11.8501" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            <path d="M7.00269 12H10.0018" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            <path d="M7.00269 8.0022H12.9993" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            <path d="M20.79 15.8827L18.8369 13.8971C18.6389 13.6957 18.3177 13.6957 18.1196 13.8971L14.3632 17.716C14.2545 17.8266 14.201 17.9813 14.2177 18.1368L14.4325 20.1323C14.4455 20.2525 14.5388 20.3474 14.657 20.3605L16.6198 20.5789C16.7727 20.5959 16.9249 20.5415 17.0337 20.431L20.79 16.612C20.9881 16.4106 20.9881 16.0841 20.79 15.8827Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <button onClick={() => onDelete()} className="p-1.5 rounded-lg bg-red-100 text-red-600">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                            <path d="M5.7372 6.54395V18.9857C5.7372 19.7449 6.35269 20.3604 7.11194 20.3604H16.8894C17.6487 20.3604 18.2642 19.7449 18.2642 18.9857V6.54395M2.90918 6.54395H21.091" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Data Admin 2 */}
                        <tr className="hover:bg-gray-50 transition">
                            <td className="px-4 py-3 text-center text-gray-500">2</td>
                            <td className="px-4 py-3 text-center font-medium text-gray-900">Budi Santoso</td>
                            <td className="px-4 py-3 text-center text-gray-600">budi_kasir</td>
                            <td className="px-4 py-3 text-center">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-medium">
                                    Aktif
                                </span>
                            </td>
                            <td className="px-4 py-3 text-center text-gray-600">27 Jan 2026</td>
                            <td className="px-4 py-3 text-center">
                                <div className="flex justify-center gap-2">
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
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
