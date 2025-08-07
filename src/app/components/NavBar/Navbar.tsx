"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const servicesData = {
  "Software Development": {
    items: [
      "Mobile App Development",
      "Web Development",
      "SaaS Development",
      "Backend Development",
      "Frontend Development",
      "Full-Stack Development",
      "API Development",
      "Database Design",
    ],
  },
  "AI Development": {
    items: [
      "Large Language Models (LLM)",
      "AI Chatbots",
      "AI Agents",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "AI Integration",
      "Custom AI Solutions",
    ],
  },
  "E-commerce Solutions": {
    items: [
      "Shopify Development",
      "WordPress E-commerce",
      "Custom E-commerce",
      "Payment Integration",
      "Inventory Management",
      "Multi-vendor Platforms",
      "E-commerce Analytics",
      "Mobile Commerce",
    ],
  },
  "UI/UX Design": {
    items: [
      "User Interface Design",
      "User Experience Design",
      "Prototyping",
      "Design Systems",
      "Mobile App Design",
      "Web Design",
      "Brand Identity",
      "Usability Testing",
    ],
  },
  "Custom Software": {
    items: [
      "Enterprise Solutions",
      "CRM Development",
      "ERP Systems",
      "Business Automation",
      "Legacy System Migration",
      "Cloud Solutions",
      "DevOps Services",
      "Technical Consulting",
    ],
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrolledDown = prevScrollPos < currentScrollPos
      const isScrolledUp = prevScrollPos > currentScrollPos
      const isAtTop = currentScrollPos < 50

      setScrolled(currentScrollPos > 20)
      setVisible(isAtTop || isScrolledUp || isOpen || showServicesDropdown)
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, isOpen, showServicesDropdown])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setShowServicesDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
    setShowServicesDropdown(false)
  }

  const handleServicesHover = () => {
    setShowServicesDropdown(true)
  }

  const handleServicesLeave = () => {
    setShowServicesDropdown(false)
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
            <Link href="/" className="text-white text-2xl font-bold tracking-tight">
              asyncdevco ai
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesLeave}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  Services
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      showServicesDropdown ? "rotate-180" : "",
                    )}
                  />
                </button>
              </div>

              {["Technology", "About", "Resources", "Insights", "Company", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 font-medium transition-colors hover:bg-gray-200 group"
              >
                Schedule Strategy Call
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

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

        {showServicesDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
            onMouseEnter={handleServicesHover}
            onMouseLeave={handleServicesLeave}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {Object.entries(servicesData).map(([category, { items }]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-white font-semibold text-lg border-b border-white/20 pb-2">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                            className="text-gray-300 hover:text-white transition-colors text-sm block py-1 hover:translate-x-1 transition-transform duration-200"
                            onClick={handleLinkClick}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  View All Services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden overflow-y-auto">
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
                <div>
                  <button
                    onClick={() => setShowMobileServices(!showMobileServices)}
                    className="flex items-center justify-between w-full text-white text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-6 h-6 transition-transform duration-200",
                        showMobileServices ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  {showMobileServices && (
                    <div className="mt-4 ml-4 space-y-6 border-l border-white/20 pl-4">
                      {Object.entries(servicesData).map(([category, { items }]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-white font-semibold text-xl">{category}</h4>
                          <ul className="space-y-2 ml-4">
                            {items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                                  className="text-gray-300 hover:text-white transition-colors text-lg block"
                                  onClick={handleLinkClick}
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {["Technology", "About", "Resources", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
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
