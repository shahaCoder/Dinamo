import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Internal admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex justify-between relative">
          <aside className="w-[350px] bg-[rgba(3,163,239,1)] h-full self-stretch">
            <Navbar />
          </aside>
          <main className="w-full p-4 bg-white h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}