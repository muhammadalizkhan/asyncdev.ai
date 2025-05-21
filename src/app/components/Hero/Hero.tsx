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

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text content - spans 6 columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-white mb-8"
              />
              <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
                Crafting
                <span className="block mt-2 text-6xl md:text-8xl font-extrabold">Digital Excellence</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              Asyn Dev AI delivers cutting-edge solutions in AI development, software engineering, product design, and
              digital experiences that transform businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group">
                Explore our work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white hover:bg-white/10 rounded-none px-8 py-7 text-lg font-medium"
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
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Main container */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                {/* Top left quadrant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative bg-white"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-black"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-l border-t border-black"></div>
                </motion.div>

                {/* Top right quadrant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative border-2 border-white"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-white"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-white"></div>
                </motion.div>

                {/* Bottom left quadrant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative border-2 border-white"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-white"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l border-b border-white"></div>
                </motion.div>

                {/* Bottom right quadrant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative bg-white"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-black"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-t border-black"></div>
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

        {/* Services bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-6 text-sm text-gray-400 uppercase tracking-wider">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3"></div>
                <span>AI Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3"></div>
                <span>Software Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3"></div>
                <span>Product Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3"></div>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white mr-3"></div>
                <span>E-commerce Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
