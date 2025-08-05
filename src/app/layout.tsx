import localFont from "next/font/local"
import "./globals.css"
import type { ReactNode } from "react"
import Footer from "./Footer/Page"
import Navbar from "./components/NavBar/Navbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "asyndevco | AI Development, Software Engineering, Product Design, and Digital Experiences",
  description: "Crafting Digital Excellence. We build intelligent digital solutions in AI, custom software, and modern product design.",
  keywords: [
    "AI Development", "Software Engineering", "Product Design", "Custom Software", "Web Development",
    "LLM Agents", "MVP Development", "asyndevco", "Mobile App Development", "Generative AI"
  ],
  authors: [{ name: "asyndevco", url: "https://asyndevco.com" }],
  creator: "asyndevco",
  metadataBase: new URL("https://asyndevco.com"),
  openGraph: {
    title: "asyndevco | AI Development & Software Engineering",
    description: "Crafting Digital Excellence in AI, software, and product design.",
    url: "https://asyndevco.com",
    siteName: "asyndevco",
    images: [
      {
        url: "https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg",
        width: 1200,
        height: 630,
        alt: "asyndevco Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "asyndevco | AI & Software Development",
    description: "Crafting modern AI-driven products and scalable software solutions.",
    creator: "@yourtwitterhandle", // optional
    images: ["https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
