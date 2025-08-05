"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const keyFeatures = ["Scalable Architecture", "Security-First Approach", "Agile Development", "24/7 Support"]

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Enterprise Clients" },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-10">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full"></div>
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-8 opacity-10">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-b border-white/20 w-full"></div>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[70vh] flex flex-col justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Software
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Transform your business with tailored software solutions. We build scalable, secure, and innovative
              applications that drive growth and operational efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-5 h-5 border border-white/30 flex items-center justify-center bg-white/10">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="bg-white text-black hover:bg-gray-100 hover:text-black rounded-none px-8 py-6 text-lg font-medium group transition-all duration-200">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg font-medium transition-all duration-200 bg-transparent"
              >
                View Case Studies
              </Button>
            </motion.div>
          </div>


        </div>

      </div>
    </section>
  )
}
