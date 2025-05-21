"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle scroll direction for hiding/showing navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrolledDown = prevScrollPos < currentScrollPos
      const isScrolledUp = prevScrollPos > currentScrollPos
      const isAtTop = currentScrollPos < 50

      setScrolled(currentScrollPos > 20)

      // Show navbar when: at top, scrolling up, or menu is open
      setVisible(isAtTop || isScrolledUp || isOpen)

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled ? "py-3 backdrop-blur-md bg-black/70 border-b border-white/10" : "py-5 bg-transparent",
          visible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <Link href="/" className="text-white text-2xl font-bold tracking-tight">
              Asyn Dev AI
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {["Services", "Technology", "About", "Resources", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 font-medium transition-colors hover:bg-gray-200 group"
              >
                Schedule Strategy Call
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="text-white text-2xl font-bold tracking-tight" onClick={handleLinkClick}>
                Asyn Dev AI
              </Link>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="border-t border-white/10 pt-10">
              <div className="flex flex-col space-y-6">
                {["Services", "Technology", "About", "Resources", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className="text-white text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/10">
                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium transition-colors hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Schedule Strategy Call
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
