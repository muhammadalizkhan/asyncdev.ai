"use client"

import { useState, useEffect } from "react"

export const useMobile = () => {
  // Default to true for server-side rendering
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Function to check if the device is mobile
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
    }

    // Check immediately on mount
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

