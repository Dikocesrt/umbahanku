export default function CreateOrder() {
    return (
        <>
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Buat Pesanan Baru</h1>
                <p className="text-gray-500 mt-1">Isi form berikut untuk membuat pesanan laundry baru</p>
            </div>

            {/* Order Form */}
            <form id="orderForm" className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Customer & Services */}
                <div className="xl:col-span-2 space-y-6">

                    {/* Customer Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Data Pelanggan</h2>
                                <p className="text-sm text-gray-500">Cari pelanggan atau tambah baru</p>
                            </div>
                        </div>

                        {/* Customer Search */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="customerSearch"
                                placeholder="Cari dengan nama atau nomor HP..."
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Selected Customer Display */}
                        <div id="selectedCustomer" className="hidden bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-300 rounded-xl flex items-center justify-center">
                                        <span id="customerInitial" className="text-white font-bold text-lg">A</span>
                                    </div>
                                    <div>
                                        <p id="customerName" className="font-semibold text-gray-800">-</p>
                                        <p id="customerPhone" className="text-sm text-gray-500">-</p>
                                    </div>
                                </div>
                                <button type="button" className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* New Customer Form */}
                        <div id="newCustomerForm" className="hidden mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-sm font-medium text-gray-700 mb-3">Tambah Pelanggan Baru</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Nama Lengkap</label>
                                    <input type="text" id="newCustomerName" placeholder="Masukkan nama" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Nomor HP</label>
                                    <input type="tel" id="newCustomerPhone" placeholder="08xxxxxxxxxx" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                </div>
                            </div>
                            <button type="button" className="mt-3 px-4 py-2 bg-blue-300 text-white text-sm font-medium rounded-lg hover:bg-blue-400 transition-all">
                                Simpan Pelanggan
                            </button>
                        </div>

                        {/* Toggle New Customer */}
                        <button type="button" id="toggleNewCustomer" className="mt-4 text-sm text-blue-300 hover:text-blue-400 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Pelanggan Baru
                        </button>
                    </div>

                    {/* Layanan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Pilih Layanan</h2>
                                <p className="text-sm text-gray-500">Pilih layanan dan masukkan jumlah/berat</p>
                            </div>
                        </div>

                        {/* Cari Layanan */}
                        <div className="mb-3">
                            <div className="relative">
                                <input type="text" id="serviceSearch" placeholder="Cari layanan..." className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* List Layanan */}
                        <div className="space-y-3">
                            {/* Service Item 1 */}
                            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4 border border-gray-100">
                                {/* Nama Layanan */}
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="accent-blue-400 w-5 h-5 rounded" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-800">Cuci Kering</span>
                                            <span className="text-xs font-semibold bg-blue-100 text-blue-400 rounded px-2 py-0.5">2 HARI</span>
                                        </div>
                                        <div className="text-sm text-gray-400">Rp 7.000 / kg</div>
                                    </div>
                                </div>
                                {/* Masukan Berat */}
                                <div className="flex items-center gap-2">
                                    <input type="number" className="w-16 text-center font-semibold bg-white border border-gray-100 rounded-lg py-2 px-3 text-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                    <span className="font-semibold text-gray-800">kg</span>
                                </div>
                            </div>

                            {/* Service Item 2 */}
                            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="accent-blue-400 w-5 h-5 rounded" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-800">Cuci Setrika</span>
                                            <span className="text-xs font-semibold bg-green-100 text-green-500 rounded px-2 py-0.5">1 HARI</span>
                                        </div>
                                        <div className="text-sm text-gray-400">Rp 8.000 / kg</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" className="w-16 text-center font-semibold bg-white border border-gray-100 rounded-lg py-2 px-3 text-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                    <span className="font-semibold text-gray-800">kg</span>
                                </div>
                            </div>

                            {/* Service Item 3 */}
                            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="accent-blue-400 w-5 h-5 rounded" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-800">Cuci Bed Cover</span>
                                            <span className="text-xs font-semibold bg-amber-100 text-amber-500 rounded px-2 py-0.5">3 HARI</span>
                                        </div>
                                        <div className="text-sm text-gray-400">Rp 20.000 / pcs</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" className="w-16 text-center font-semibold bg-white border border-gray-100 rounded-lg py-2 px-3 text-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                                    <span className="font-semibold text-gray-800">pcs</span>
                                </div>
                            </div>
                        </div>

                        {/* Catatan */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Catatan (Opsional)</label>
                            <textarea id="orderNotes" rows={2} placeholder="Catatan khusus untuk pesanan ini..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all resize-none"></textarea>
                        </div>
                    </div>
                </div>

                {/* Rincian Pesanan */}
                <div className="space-y-6">

                    {/* Order Summary Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h2>

                        {/* Order ID */}
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                            <span className="text-sm text-gray-500">No. Pesanan</span>
                            <span id="orderId" className="text-sm font-mono font-semibold text-gray-800">ORD-20260120-001</span>
                        </div>

                        {/* Estimasi Pesanan Selesai */}
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <span className="text-sm text-gray-500">Estimasi Selesai</span>
                            <span id="deadline" className="text-sm font-medium text-gray-800">Senin, 26 Januari 2026, 15:00 WIB</span>
                        </div>

                        {/* Pesanan */}
                        <div className="space-y-2">
                            <div className="py-4 border-b border-gray-100 min-h-[80px]">
                                <p className="text-sm text-gray-600 font-bold">Cuci Kering 2 hari</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">2 kg x Rp 7.000</span>
                                    <span className="text-sm font-medium text-gray-800">Rp 14.000</span>
                                </div>
                            </div>
                            <div className="py-4 border-b border-gray-100 min-h-[80px]">
                                <p className="text-sm text-gray-600 font-bold">Cuci Spray</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">1 kg x Rp 7.000</span>
                                    <span className="text-sm font-medium text-gray-800">Rp 7.000</span>
                                </div>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="py-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Subtotal</span>
                                <span id="subtotal" className="text-sm font-medium text-gray-800">Rp 21.000</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Diskon</span>
                                <span id="discount" className="text-sm font-medium text-green-500">- Rp 0</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-t border-gray-200">
                            <span className="font-semibold text-gray-800">Total</span>
                            <span id="totalPrice" className="text-xl font-bold text-blue-300">Rp 21.000</span>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Metode Pembayaran</label>
                            <select id="paymentMethod" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all">
                                <option value="">Pilih metode pembayaran</option>
                                <option value="cash">Tunai (Cash)</option>
                                <option value="transfer">Transfer Bank</option>
                                <option value="qris">QRIS</option>
                                <option value="ewallet">E-Wallet (OVO/GoPay/Dana)</option>
                            </select>
                        </div>

                        {/* Payment Amount */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Bayar</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                                <input type="number" id="paymentAmount" placeholder="0" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Change */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-4">
                            <span className="text-sm text-gray-600">Kembalian</span>
                            <span id="changeAmount" className="font-semibold text-gray-800">Rp 0</span>
                        </div>

                        {/* Payment Status */}
                        <div className="flex items-center gap-3 mb-6">
                            <input type="checkbox" id="isPaid" className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500" />
                            <label htmlFor="isPaid" className="text-sm text-gray-700">Tandai sebagai <span className="font-semibold text-green-500">Lunas</span></label>
                        </div>

                        {/* Button Buat Pesanan */}
                        <div className="space-y-3">
                            <button type="submit" className="w-full py-3 bg-blue-300 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-300/30">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Buat Pesanan
                            </button>

                            {/* Cetak Struk */}
                            <div className="grid grid-cols-2 gap-3">
                                <button type="button" className="py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm">
                                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.937 6.563L4 29l7.688-1.969A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.09 0-4.13-.547-5.91-1.583l-.422-.25-4.563 1.167 1.219-4.438-.271-.438A10.89 10.89 0 015.083 15c0-6.018 4.899-10.917 10.917-10.917S26.917 8.982 26.917 15 22.018 25.917 16 25.917zm5.99-7.26c-.328-.164-1.938-.957-2.24-1.067-.302-.111-.521-.164-.74.164-.219.328-.849 1.067-1.042 1.286-.192.219-.384.246-.712.082-.328-.164-1.385-.511-2.64-1.627-.975-.87-1.633-1.942-1.827-2.27-.192-.328-.021-.505.144-.669.148-.147.328-.383.492-.574.164-.192.219-.328.328-.547.109-.219.055-.41-.027-.574-.082-.164-.74-1.786-1.014-2.448-.267-.642-.54-.555-.74-.565l-.63-.012c-.192 0-.505.073-.77.365-.263.292-1.01.984-1.01 2.4 0 1.416 1.034 2.785 1.178 2.978.144.192 2.037 3.116 4.938 4.25.691.298 1.23.475 1.65.608.693.22 1.324.189 1.822.115.556-.082 1.938-.792 2.213-1.557.273-.765.273-1.42.192-1.557-.082-.137-.301-.219-.63-.383z" />
                                    </svg>
                                    Kirim Struk WA
                                </button>
                                <button type="button" className="py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    Struk Operasional
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}