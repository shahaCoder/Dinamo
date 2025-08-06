import ClientLayout from "./components/client-layout"
import "./globals.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Internal admin dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
