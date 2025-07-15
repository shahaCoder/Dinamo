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
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen">
          <aside className="w-70 bg-[rgba(3,163,239,1)]">
            <Navbar />
          </aside>
          <main className="flex-1 p-4 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}