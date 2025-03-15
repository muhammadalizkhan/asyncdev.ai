"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

export default function OptimizedHero() {
  const shouldReduceMotion = useReducedMotion()
  const fadeIn = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  return (
    <div className="relative w-[95%] mx-auto mt-4 h-[600px] md:h-[650px] rounded-2xl bg-black flex items-center justify-center shadow-xl p-4 md:p-6 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-16 w-32 h-32 rounded-full bg-purple-400 blur-xl opacity-10" />
        <div className="absolute bottom-1/4 right-16 w-40 h-40 rounded-full bg-yellow-400 blur-xl opacity-10" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-2xl w-full"
        >
          <motion.div
            variants={fadeIn}
            className="flex items-center mb-4 bg-purple-100 bg-opacity-10 px-4 py-2 rounded-full"
          >
            <div className="mr-2 bg-yellow-400 rounded-full p-1">
              <ChevronRight className="w-4 h-4 text-black" />
            </div>
            <p className="text-white text-sm font-light tracking-wide">
              Optimize Your Path with Our Services
            </p>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-normal mb-4 md:mb-6 tracking-tight"
          >
            Spark Your Evolution with Our
            <span className="text-purple-400 font-light"> Comprehensive </span>
            <span className="text-yellow-400 block mt-2 font-medium">
              Software Development
            </span>
            Offerings
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-white text-base md:text-lg mb-6 md:mb-8 opacity-80 font-light"
          >
            As an accomplished development company,
            <span className="text-yellow-400 font-medium mx-1">AsynDev</span>
            is steadfast in providing our clients with top-notch solutions of the highest quality.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              className="bg-purple-500 text-white font-normal px-5 py-5 md:px-6 md:py-6 rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition-colors"
              aria-label="Book Free Consultation"
            >
              Book Free Consultation
            </Button>

            <button
              className="flex items-center justify-center text-white font-light px-5 py-2 md:px-6 md:py-3 rounded-full border border-white border-opacity-20 hover:border-opacity-40 transition-colors"
              aria-label="View Our Work"
            >
              View Our Work
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        <div className="hidden md:block relative mt-8 md:mt-0">
          <div className="bg-[#3b82f6] rounded-2xl p-4 relative overflow-hidden">
            <div className="w-64 h-64 lg:w-72 lg:h-72 relative">
              <Image
                src="https://cdn.dribbble.com/userupload/24544523/file/original-9e5bf7293f24eaf6d35f047c5df952f6.png"
                alt="Software Development Illustration"
                width={512}
                height={512}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
                quality={85}
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-white text-sm font-light tracking-wide">
                Delivering solutions on time, every time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}