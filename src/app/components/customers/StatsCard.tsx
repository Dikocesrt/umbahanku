export default function StatsCard() {
    return (
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
    )
}