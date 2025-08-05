"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Store, Lightbulb } from "lucide-react"

const expertiseAreas = [
  {
    title: "AI Development",
    description: "Building intelligent systems that learn, adapt, and automate complex tasks for enhanced efficiency.",
    icon: Brain,
  },
  {
    title: "Software Development",
    description:
      "Crafting robust, scalable, and high-performance custom software tailored to your unique business needs.",
    icon: Code2,
  },
  {
    title: "eCommerce Storefronts",
    description: "Designing and developing engaging, secure, and high-converting online stores that drive sales.",
    icon: Store,
  },
  {
    title: "MVPs Development",
    description:
      "Rapidly building Minimum Viable Products to validate ideas and accelerate market entry with core features.",
    icon: Lightbulb,
  },
]

export default function OurExpertise() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      className="relative bg-black py-10 lg:py-14 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/5 rounded-lg rotate-45 backdrop-blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [45, 55, 45],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[8%] w-36 h-36 bg-white/5 rounded-full backdrop-blur-xl"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-[10%] w-28 h-28 bg-white/5 rounded-full backdrop-blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">asyncdevco AI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Core Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light"
          >
            Specialized services designed to transform your vision into cutting-edge digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {expertiseAreas.map((expertise, index) => {
            const IconComponent = expertise.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl p-px
                           bg-gradient-to-br from-white/[0.1] via-white/[0.03] to-transparent
                           hover:from-white/[0.2] hover:via-white/[0.06] hover:to-transparent
                           transition-all duration-500 ease-out"
              >
                <div className="relative z-10 h-full rounded-2xl bg-black/40 backdrop-blur-xl p-8 flex flex-col justify-between">
                  <div>
                    <div
                      className="w-16 h-16 round-md bg-white/[0.1] border border-white/20 flex items-center justify-center mb-6
                                    group-hover:bg-white/[0.18] group-hover:border-white/30 transition-all duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-white group-hover:text-gray-100 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                      {expertise.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed font-light">{expertise.description}</p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none
                            bg-gradient-to-br from-white/[0.15] via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
