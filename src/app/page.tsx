
import Image from "next/image";

export default function Dashboard() {

    return (
        <>
            <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Welcome back, Bubub! Here&apos;s what&apos;s
                        happening today.
                    </p>
                </div>
            </main>
        </>
    );
}
