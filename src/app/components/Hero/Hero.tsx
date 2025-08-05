"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative py-20 min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-15">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full"></div>
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-12 opacity-15">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-b border-white/10 w-full"></div>
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow flex items-center py-12 sm:py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6 sm:space-y-8"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[2px] bg-white mb-6 sm:mb-8"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight">
                  Crafting
                  <span className="block mt-1 sm:mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
                    Digital Excellence
                  </span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed"
              >
                Asyn Dev AI delivers cutting-edge solutions in AI development, software engineering, product design, and
                digital experiences that transform businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Button className="bg-white text-black hover:bg-gray-100 hover:text-black rounded-none px-6 sm:px-8 py-5 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg font-medium group transition-all duration-200">
                  Explore our work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black rounded-none px-6 sm:px-8 py-5 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg font-medium transition-all duration-200 bg-transparent"
                >
                  Our services
                </Button>
              </motion.div>
            </motion.div>

            {/* Visual element - spans 6 columns */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center lg:justify-end"
            >
              <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Redesigned visual element */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
                  {/* Top left quadrant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/3 h-1/3 bg-black"></div>
                    </div>
                  </motion.div>

                  {/* Top right quadrant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative bg-black border border-white overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/3 h-1/3 bg-white"></div>
                    </div>
                  </motion.div>

                  {/* Bottom left quadrant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative bg-black border border-white overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/3 h-1/3 bg-white"></div>
                    </div>
                  </motion.div>

                  {/* Bottom right quadrant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative bg-white overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/3 h-1/3 bg-black"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 border border-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 border border-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/40"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services bar - fixed at bottom */}
        <div className="w-full border-t border-white/10 py-6 sm:py-8 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
            {[
              "AI Development",
              "Software Development",
              "Product Development",
              "UI/UX Design",
                            "UI/UX Design",
              "Software Testing",
              "Mobile App Development",
              "Cloud Solutions",
              "UI/UX Design",
              "E-commerce Solutions",
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3 flex-shrink-0"></div>
                <span className="leading-tight">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
