"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.data.token);
                router.push("/");
            } else {
                setError(data.message || "Login gagal");
            }
        } catch {
            setError("Terjadi kesalahan, coba lagi");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full overflow-hidden bg-gray-50">
            {/* Subtle Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]" />
            </div>

            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-[50%] relative overflow-hidden bg-linear-to-br from-blue-300 via-blue-400 to-cyan-500 flex-col items-center justify-center p-12">
                {/* Subtle Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "32px 32px"
                    }}
                />

                {/* Decorative shapes */}
                <div className="absolute top-16 right-16 w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12" />
                <div className="absolute bottom-24 left-16 w-16 h-16 border-2 border-white/10 rounded-full" />
                <div className="absolute top-1/3 left-12 w-10 h-10 bg-white/5 rounded-lg rotate-45" />

                {/* Content */}
                <div className="relative z-10 space-y-8 max-w-lg">
                    {/* Logo Image */}
                    <div className="flex justify-center">
                        <img
                            src="/login.png"
                            alt="Umbahanku Logo"
                            className="w-full max-w-sm drop-shadow-xl"
                        />
                    </div>

                    <div className="text-center space-y-3">
                        <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                            Sistem manajemen laundry terlengkap untuk mengelola pesanan, pelanggan, dan laporan keuangan dalam satu platform.
                        </p>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {[
                            { label: "Kelola Pesanan", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                            { label: "Data Pelanggan", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                            { label: "Laporan", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
                        ].map((item) => (
                            <span key={item.label} className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm text-white/90 text-xs rounded-full border border-white/20 hover:bg-white/25 transition-all duration-300 cursor-default">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                </svg>
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 z-10">
                    <p className="text-white/30 text-xs">&copy; 2026 Umbahanku. All rights reserved.</p>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 z-10">
                <div className="w-full max-w-[420px]">
                    {/* Card */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8 sm:p-10 space-y-7">

                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-2">
                            <img src="/login.png" alt="Umbahanku" className="w-40" />
                        </div>

                        {/* Welcome Text */}
                        <div className="space-y-1.5">
                            <h2 className="text-2xl font-bold text-gray-800">Selamat Datang! 👋</h2>
                            <p className="text-gray-400 text-sm">Masuk ke akun Anda untuk melanjutkan</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nama Lengkap */}
                            <div className="space-y-2">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Nama Lengkap</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300">
                                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Nama Lengkap"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300/30 focus:border-blue-300 focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300">
                                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-12 py-3.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300/30 focus:border-blue-300 focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors duration-300"
                                    >
                                        {showPassword ? (
                                            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2.5 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-300 focus:ring-blue-300 accent-blue-300" />
                                    <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Ingat saya</span>
                                </label>
                                <a href="#" className="text-sm text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300">
                                    Lupa password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-300/25 hover:shadow-blue-400/30 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Memproses...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Masuk</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Sign Up Link - Outside Card */}
                    <p className="text-center text-sm text-gray-400 mt-6">
                        Belum punya akun?{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-300">
                            Daftar sekarang
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
