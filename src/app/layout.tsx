// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/NavBar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AsyncDev",
  description: "by malikhandev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
