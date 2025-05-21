"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Grid background */}
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 min-h-screen flex flex-col">
        {/* Main content area */}
        <div className="flex-grow flex items-center py-16 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            {/* Text content - spans 6 columns */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6 md:space-y-8"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[2px] bg-white mb-6 md:mb-8"
                />
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-none tracking-tight">
                  Crafting
                  <span className="block mt-2 text-5xl sm:text-6xl md:text-8xl font-extrabold">Digital Excellence</span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
              >
                Asyn Dev AI delivers cutting-edge solutions in AI development, software engineering, product design, and
                digital experiences that transform businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4"
              >
                <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg font-medium group">
                  Explore our work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white hover:bg-white/10 rounded-none px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg font-medium"
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
              className="lg:col-span-6 relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-xl">
                {/* Redesigned visual element */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
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
                  className="absolute -top-8 -left-8 w-16 h-16 border border-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="absolute -bottom-8 -right-8 w-16 h-16 border border-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/40"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/40"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services bar - fixed at bottom */}
        <div className="w-full border-t border-white/10 py-6 md:py-8 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 text-sm text-gray-400 uppercase tracking-wider">
            {[
              "AI Development",
              "Software Development",
              "Product Development",
              "UI/UX Design",
              "E-commerce Solutions",
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3 flex-shrink-0"></div>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
