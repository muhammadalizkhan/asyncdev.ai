"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export default function ServiceHero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-15">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full"></div>
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-8 opacity-15">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-b border-white/10 w-full"></div>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-white"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Comprehensive
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-2">
                  Digital Solutions
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed"
            >
              From custom software development to cutting-edge AI solutions, we deliver innovative digital services that
              transform businesses and accelerate growth in today's competitive landscape.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4"
            >
              {[
                { number: "8+", label: "Core Services" },
                { number: "50+", label: "Projects Delivered" },
                { number: "24/7", label: "Support Available" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                onClick={scrollToServices}
                className="bg-white text-black hover:bg-gray-100 hover:text-black rounded-none px-8 py-6 text-lg font-medium group transition-all duration-200"
              >
                View Our Services
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg font-medium transition-all duration-200 bg-transparent"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
