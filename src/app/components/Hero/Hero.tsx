"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="relative w-[95%] mx-auto mt-4 h-[650px] rounded-2xl bg-black flex items-center justify-center shadow-xl p-6 overflow-hidden font-['Roboto']">
      <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-yellow-400 opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-purple-400 bg-opacity-20"></div>
      <div className="absolute top-1/4 left-16 w-32 h-32 rounded-full bg-purple-400 blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-16 w-40 h-40 rounded-full bg-yellow-400 blur-3xl opacity-10"></div>
      {isMounted && !shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-10 right-10 w-12 h-12 rounded-full border border-yellow-400 opacity-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-purple-400 bg-opacity-0"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-2xl w-full px-4 md:px-0"
        >
          <motion.div
            variants={fadeIn}
            className="flex items-center mb-4 bg-purple-100 bg-opacity-10 px-4 py-2 rounded-full"
          >
            <div className="mr-2 bg-yellow-400 rounded-full p-1">
              <ChevronRight className="w-4 h-4 text-black" />
            </div>
            <p className="text-white text-sm font-light tracking-wide">Optimize Your Path with Our Services</p>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-white text-4xl md:text-5xl font-normal mb-6 tracking-tight"
          >
            Spark Your Evolution with Our
            <span className="text-purple-400 relative z-10 font-light"> Comprehensive </span>
            <span className="text-yellow-400 block mt-2 font-medium"> Software Development </span>
            Offerings
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-white text-lg mb-8 opacity-80 font-light"
          >
            As an accomplished development company,
            <span className="text-yellow-400 font-medium mx-1">AsynDev</span>
            is steadfast in providing our clients with top-notch solutions of the highest quality.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-purple-500 text-white font-normal px-6 py-6 rounded-full shadow-md transition transform hover:scale-105 hover:bg-yellow-400 hover:text-black">
              Book Free Consultation
            </Button>

            <button className="flex items-center justify-center text-white font-light px-6 py-3 rounded-full border border-white border-opacity-20 hover:border-opacity-40 transition hover:scale-105">
              View Our Work
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="hidden md:block relative"
        >
          <div className="bg-[#3b82f6] rounded-2xl p-6 relative z-0 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-72 h-72 flex items-center justify-center">
              <Image
                src="https://cdn.dribbble.com/userupload/24544523/file/original-9e5bf7293f24eaf6d35f047c5df952f6.png?resize=1024x768&vertical=center"
                alt="Software Development Illustration"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-white text-sm font-light tracking-wide">Delivering solutions on time, every time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
