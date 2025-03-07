"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CSDHeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/2016/03/how-to-run-a-meeting.jpg"
          alt="Team Meeting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Custom Software Development Company
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Power your business with robust, secure, and scalable software solutions. 10Pearls is a leading custom
            software development company with a proven track record of delivering exceptional value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            <Button className="rounded-full bg-yellow-400 px-8 py-6 text-base font-semibold text-black transition-all hover:bg-yellow-500 hover:scale-105">
              Let&apos;s connect
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 h-32 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Optional: Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  )
}

