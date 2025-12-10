import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Link Astral",
  description: "Design místico para presença digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="
          antialiased
          bg-[#06040F] 
          text-white 
          min-h-screen 
          relative
          overflow-x-hidden
        "
      >
        {/* ⭐ Fundo gradiente global */}
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black -z-10"></div>

        {/* 🌌 Estrelas sutis */}
        <div className="pointer-events-none fixed inset-0 bg-[url('/stars.png')] bg-cover opacity-20 -z-10"></div>

        {children}
      </body>
    </html>
  )
}
