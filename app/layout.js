import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Evictions Analysis",
    template: "%s | Evictions Analysis",
  },
  description: "Access Point for Los Angeles Evictions Notices Analysis",
  openGraph: {
    title: "Evictions Analysis",
    description: "Access Point for Los Angeles Evictions Notices Analysis",
    url: "https://lapd-dashboard.vercel.app/",
    siteName: "Evictions Analysis",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "LAPD Dashboard",
  //   description: "Access Point for LAPD Data",
  //   creator: "@lacontroller",
  //   image: "https://lapd-dashboard.vercel.app/dashboard.png",
  // },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
