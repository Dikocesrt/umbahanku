"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    useEffect(() => { //untuk mengecek token
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router])

    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Welcome back, Bubub! Here&apos;s what&apos;s
                    happening today.
                </p>
            </div>
        </>
    );
}
