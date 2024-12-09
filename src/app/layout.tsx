import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "./Footer/Page";
import Header from "./components/Header/Header";

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
    <html  lang="en" cz-shortcut-listen="true">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
