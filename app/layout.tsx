import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Micro Skill Builder | AI-Powered Micro-Learning in 2 Minutes',
  description: 'Master life\'s micro-moments with real-time AI feedback on posture, voice, and facial expressions. Build confidence in just 2 minutes daily.',
  keywords: ['micro-learning', 'AI coach', 'confidence building', 'communication skills', 'body language'],
  authors: [{ name: 'IIT Westminster CS-114 Team' }],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0A1A3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
