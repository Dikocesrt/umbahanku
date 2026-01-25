import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/layout/LayoutWrapper";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "UMBAHANKU",
    description: "Laundry Management Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body className={`bg-gray-50 min-h-screen`}>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </body>
        </html>
    );
}
