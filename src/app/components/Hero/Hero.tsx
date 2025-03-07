"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative w-[95%] mx-auto mt-4 h-[650px] rounded-2xl bg-black flex items-center justify-center shadow-xl p-6 overflow-hidden font-['Roboto']">
      <motion.div
        className="absolute top-10 right-10 w-12 h-12 rounded-full border border-yellow-400 opacity-60"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-purple-400 bg-opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute top-1/4 left-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-32 h-32 rounded-full bg-purple-400 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-40 h-40 rounded-full bg-yellow-400 blur-3xl" />
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-start text-left max-w-2xl w-full px-4 md:px-0"
        >
          <motion.div
            className="flex items-center mb-4 bg-purple-100 bg-opacity-10 px-4 py-2 rounded-full"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="mr-2 bg-yellow-400 rounded-full p-1"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </motion.div>
            <p className="text-white text-sm font-light tracking-wide">Optimize Your Path with Our Services</p>
          </motion.div>

          <h1 className="text-white text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Spark Your Evolution with Our
            <motion.div className="inline-block relative">
              <motion.span
                className="text-purple-400 relative z-10 font-light"
                animate={{
                  color: ["#c084fc", "#facc15", "#c084fc"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {" "}
                Comprehensive{" "}
              </motion.span>
            </motion.div>
            <motion.span
              className="text-yellow-400 block mt-2 font-medium"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(250, 204, 21, 0)",
                  "0px 0px 10px rgba(250, 204, 21, 0.3)",
                  "0px 0px 0px rgba(250, 204, 21, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              {" "}
              Software Development{" "}
            </motion.span>
            Offerings
          </h1>

          <p className="text-white text-lg mb-8 opacity-80 font-light">
            As an accomplished development company,
            <motion.span
              className="text-yellow-400 font-medium mx-1"
              animate={{
                textShadow: [
                  "0px 0px 5px rgba(255, 191, 0, 0)",
                  "0px 0px 10px rgba(255, 191, 0, 0.3)",
                  "0px 0px 5px rgba(255, 191, 0, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              AsynDev
            </motion.span>
            is steadfast in providing our clients with top-notch solutions of the highest quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-purple-500 text-white font-normal px-6 py-6 rounded-full shadow-md transition transform hover:scale-105 hover:bg-yellow-400 hover:text-black">
              Book Free Consultation
            </Button>

            <motion.button
              className="flex items-center justify-center text-white font-light px-6 py-3 rounded-full border border-white border-opacity-20 hover:border-opacity-40 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
              <ChevronRight className="ml-2 w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block relative"
        >
          <motion.div
            className="bg-[#3b82f6] rounded-2xl p-6 relative z-0 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-72 h-72 flex items-center justify-center">
              <Image
                src="https://cdn.dribbble.com/userupload/24544523/file/original-9e5bf7293f24eaf6d35f047c5df952f6.png?resize=1024x768&vertical=center"
                alt="Software Development Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-white text-sm font-light tracking-wide">Delivering solutions on time, every time</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

